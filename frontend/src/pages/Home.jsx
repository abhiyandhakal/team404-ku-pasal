import Hero from '../components/jsx-components/Hero'
import List from '../components/jsx-components/List'
import Navbar from '../components/jsx-components/Navbar'
import MainStyled from '../components/styled-components/main/main.styled'
import { v4 as uuid } from 'uuid'
import Footer from '../components/jsx-components/Footer'

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

const categoryList = [
	'all products',
	...new Set(productList.map((product) => product.category)),
]

const Home = () => {
	return (
		<>
			<header>
				<Navbar />
				<Hero />
			</header>
			<MainStyled>
				{categoryList.map((category) => {
					const uniqueId = uuid()

					const filteredList =
						category === 'all products'
							? productList
							: productList.filter((product) => product.category === category)
					return (
						<List
							key={uniqueId}
							filteredList={filteredList}
							category={category}
						/>
					)
				})}
			</MainStyled>
			<Footer />
		</>
	)
}

export default Home
