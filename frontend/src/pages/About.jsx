import Footer from '../components/jsx-components/Footer'
import Navbar from '../components/jsx-components/Navbar'
import MainStyled from '../components/styled-components/main/main.styled'
import H1 from '../components/styled-components/typography/h1.styled'
import H3 from '../components/styled-components/typography/h3.styled'

const About = () => {
	return (
		<div style={{maxHeight:"100px",}}>
			<header>
				<Navbar />
			</header>
			<MainStyled>
				<H1 style={{
					

				}}>About Us</H1>
				<H3 style={{
						paddingTop:"3rem",
						textTransform:"none",
				}}>
					KU-pasal is an emerging platform for people, students, and businesses around KU premises.
					KU-pasal connects the local community to sell, buy and exchange their used goods and services quickly and easily so that anyone can post an announcement on their cell phone or on the website itself. We offer you a free website where you can find and sell a wide range of new, fresh and used –second-hand products like Guitar, laptops, mobile phones, furniture, stationery items, goods, and local services, and many other products.
					At KU-pasal we believe in making KU-pasal a better place: we improve students’ lives by bringing them together for mutual benefit exchanges. Sellers can easily earn some extra money simply by publishing products they no longer use or those they want to sell - thus, allowing buyers to find high-value items at reasonable prices.
				</H3>




			</MainStyled>
			<Footer />
		</div>
	)
}

export default About
