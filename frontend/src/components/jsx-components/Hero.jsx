import HeroStyled from '../styled-components/header/hero.styled'
import H1 from '../styled-components/typography/h1.styled'
import H2 from '../styled-components/typography/h2.styled'
import P from '../styled-components/typography/p.styled'

const Hero = () => {
	return (
		<HeroStyled>
			<img src='https://unsplash.it/600/600' alt='hero_image' />

			<div>
				<H1>
					Welcome to
					<br />
					KU-Pasal
				</H1>
				<H2>New at Kathmandu University?</H2>
				<P>
					Here at KU-mart you will get all sorts of items, both used(mostly) and
					new items ranging from subject notes to kitchen appliances suppiled by
					your seniors
				</P>
			</div>
		</HeroStyled>
	)
}

export default Hero
