import FooterStyled from '../styled-components/footer/footer.styled'
import logo from '../../assets/logo.svg'
import VerticalNavStyled from '../styled-components/footer/vertical-nav.styled'
import { Link, useParams } from 'react-router-dom'
import H2 from '../styled-components/typography/h2.styled'
import P from '../styled-components/typography/p.styled'

const Footer = () => {
	const { userId } = useParams()
	const userID = userId

	return (
		<FooterStyled>
			<img src={logo} alt='KU-Pasal' />

			<VerticalNavStyled>
				<H2>Links</H2>
				<ul>
					<li>
						{userID ? (
							<Link to={`/${userId}/about`}>About</Link>
						) : (
							<Link to={`/about`}>About Us</Link>
						)}
					</li>
					{userID ? (
						<li>
							<Link to={`/${userId}/sell`}>Sell a product</Link>
						</li>
					) : (
						<>
							<li>
								<Link to={`/login`}>Login</Link>
							</li>
							<li>
								<Link to={`/signup`}>Sign up</Link>
							</li>
						</>
					)}
				</ul>
			</VerticalNavStyled>
			<VerticalNavStyled>
				<H2>Contact Information</H2>
				<ul>
					<li>
						<P>
							Email: <b>abheeyaandhacaal@gmail.com</b>
						</P>
					</li>
					<li>
						<P>
							Phone No.: <b>+977 9888888888</b>
						</P>
					</li>
					<li>
						<P>
							Address: <b>KU gate, Dulikhel, Kavre, Nepal</b>
						</P>
					</li>
				</ul>
			</VerticalNavStyled>
		</FooterStyled>
	)
}

export default Footer
