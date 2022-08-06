import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import {
	ApolloServerPluginLandingPageLocalDefault,
	ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core'
import cors from 'cors'
import 'dotenv-safe/config'
import express from 'express'
import connectRedis from 'connect-redis'
import session from 'express-session'
import Redis from 'ioredis'
import { buildSchema } from 'type-graphql'
import { connectDB } from './utils/connectDB'
import {
	__session_cookie_name__,
	__prod__,
	__VERIFY_EMAIL_PREFIX__,
	__VERIFY_EMAIL_TICKET_PREFIX__,
} from './constants'
import { UserModel } from './model'
import { sendEmailVerificationMail } from './utils/sendEmailVerificationMail'
import { createUserLoader } from './loaders/UserLoader'
import { createProductLoader } from './loaders/ProductLoader'

const main = async () => {
	await connectDB()

	const app = express()
	// app.use(cors())
	// app.set("trust proxy", 1);
	// app.use(geoapi);
	const RedisStore = connectRedis(session)
	const redis = new Redis(process.env.REDIS_URL, {
		// password: process.env.REDIS_PASSWORD,
	})

	// app.get("/geo", (req, res) => {
	//   res.json(req.geo);
	// });
	const corsOptions = {
		origin: 'http://localhost:3000',
		credentials: true,
	}

	app.use(cors(corsOptions))

	app.use(
		session({
			name: __session_cookie_name__,
			store: new RedisStore({
				client: redis,
				disableTouch: true,
			}),
			cookie: {
				httpOnly: true,
				secure: false,
				sameSite: 'lax',
				// Expires in 1 week
				maxAge: 1000 * 60 * 60 * 24 * 7,
			},
			saveUninitialized: false,
			secret: process.env.SESSION_SECRET as string,
			resave: true,
		})
	)

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [__dirname + '/resolvers/**/*.{ts,js}'],
			validate: false,
		}),
		plugins: [
			// Install a landing page plugin based on NODE_ENV
			__prod__
				? ApolloServerPluginLandingPageDisabled()
				: ApolloServerPluginLandingPageLocalDefault({ footer: false }),
		],
		debug: true,
		context: ({ req, res }) => ({
			req,
			res,
			redis,
			userLoader: createUserLoader(),
			productLoader: createProductLoader(),
		}),
	})

	await apolloServer.start()
	apolloServer.applyMiddleware({
		app,
		cors: false,
		path: '//',
	})

	//  Gonna implement different method for this, currently its for testing.
	app.get('/:id', async (req, res) => {
		const userID = await redis.get(__VERIFY_EMAIL_PREFIX__ + req.params.id)
		if (!userID) return res.status(404).send('Not Found - 404')

		const user = await UserModel.findOneAndUpdate(
			{ id: userID },
			{ isEmailVerified: true },
			{ returnDocument: 'after' }
		)
			.select('-password')
			.exec()

		// Removes the ongoing ticket
		redis.del(__VERIFY_EMAIL_TICKET_PREFIX__ + userID)

		res.send('User has been verified, now redirecting you back.')
	})

	app.get('/resend-email-verification/:userID', async (req, res) => {
		const userID = req.params.userID
		const isThereTicket = await redis.get(
			__VERIFY_EMAIL_TICKET_PREFIX__ + userID
		)
		if (isThereTicket) {
			return res.json({
				message: 'There is already ongoing ticket for this user.',
				ok: false,
			})
		}

		const user = await UserModel.findOne({ id: parseInt(userID) })
		if (!user) {
			return res.status(404).send('Not Found - 404')
		}
		const didMailSent = await sendEmailVerificationMail(user, redis)
		if (!didMailSent) {
			return res.status(500).send('Internal Server Error')
		}

		return res.json({ message: 'Check your mail.', ok: true })
	})

	app.listen(parseInt(process.env.PORT as string), () => {
		console.log(`Server started on port ${process.env.PORT}`)
	})
}

main().catch((err) => {
	console.log(err)
})
