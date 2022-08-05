import Hero from '../components/jsx-components/Hero'
import Navbar from '../components/jsx-components/Navbar'
import MainStyled from '../components/styled-components/main/main-styled'

const Home = () => {
	return (
		<>
			<header>
				<Navbar />
				<Hero />
			</header>
			<MainStyled></MainStyled>
		</>
	)
}

export default Home
