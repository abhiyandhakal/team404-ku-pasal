import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/jsx-components/Navbar'
import RoundBtn from '../components/styled-components/form-elements/round-btn.styled'
import ArticleStyled from '../components/styled-components/main/article.styled'
import MainStyled from '../components/styled-components/main/main.styled'
import H2 from '../components/styled-components/typography/h2.styled'
import H3 from '../components/styled-components/typography/h3.styled'
import P from '../components/styled-components/typography/p.styled'
import RoundBtnInverted from '../components/styled-components/form-elements/round-btn-inverted.styled'

const productList = [
	{
		id: 1,
		title: 'buttermilk pancakes',
		category: 'breakfast',
		price: 15.99,
		img: 'https://unsplash.it/500/500',
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
	},
	{
		id: 2,
		title: 'diner double',
		category: 'lunch',
		price: 13.99,
		img: 'https://unsplash.it/500/500',
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	},
	{
		id: 3,
		title: 'godzilla milkshake',
		category: 'shakes',
		price: 6.99,
		img: 'https://unsplash.it/500/500',
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
	},
	{
		id: 4,
		title: 'country delight',
		category: 'breakfast',
		price: 20.99,
		img: 'https://unsplash.it/500/500',
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
	},
	{
		id: 5,
		title: 'egg attack',
		category: 'lunch',
		price: 22.99,
		img: 'https://unsplash.it/500/500',
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
	},
	{
		id: 6,
		title: 'oreo dream',
		category: 'shakes',
		price: 18.99,
		img: 'https://unsplash.it/500/500',
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},
	{
		id: 7,
		title: 'bacon overflow',
		category: 'breakfast',
		price: 8.99,
		img: 'https://unsplash.it/500/500',
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},
	{
		id: 8,
		title: 'american classic',
		category: 'lunch',
		price: 12.99,
		img: 'https://unsplash.it/500/500',
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},
	{
		id: 9,
		title: 'quarantine buddy',
		category: 'shakes',
		price: 16.99,
		img: 'https://unsplash.it/500/500',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
]

const Product = () => {
	const { userId, productId } = useParams()

	const { title, category, price, img, desc } = productList.find(
		(product) => product.id.toString() === productId
	)

	return (
		<>
			<header>
				<Navbar />
			</header>
			<MainStyled
				style={{
					display: 'grid',
					gridTemplateColumns: '.5fr 1.5fr',
					gap: 'var(--padding-block)',
				}}
			>
				<div
					style={{ gridRow: 'span 2', display: 'grid', placeItems: 'center' }}
				>
					<img
						src={img}
						alt={title}
						style={{
							height: '95%',
							aspectRatio: 1,
							objectFit: 'cover',
							borderRadius: 'var(--border-radius)',
							boxShadow: 'var(--box-shadow-2)',
						}}
					/>
					<RoundBtn>Buy Now</RoundBtn>
				</div>

				<ArticleStyled>
					<H2>{title}</H2>
					<P>
						Price: <b>{price}</b>
					</P>
					<P>
						Category: <b style={{ textTransform: 'capitalize' }}>{category}</b>
					</P>
					<P>
						Seller:{' '}
						<b style={{ textTransform: 'capitalize' }}>Prabesh Guragain</b>
					</P>
					<P>
						Used for: <b>6 months</b>
					</P>
					<P>
						Preferred delivery address: <b>KU gate</b>
					</P>
				</ArticleStyled>
				<ArticleStyled>
					<H3>Description: </H3>
					<P>{desc}</P>
				</ArticleStyled>
			</MainStyled>

			<Link
				to={`/${userId}/`}
				style={{
					position: 'fixed',
					bottom: 'var(--padding-block)',
					right: 'var(--padding-inline)',
				}}
			>
				<RoundBtnInverted>Continue Shopping</RoundBtnInverted>
			</Link>
		</>
	)
}

export default Product
