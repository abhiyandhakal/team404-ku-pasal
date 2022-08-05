import Navbar from '../components/jsx-components/Navbar'
import MainStyled from '../components/styled-components/main/main.styled'
import P from '../components/styled-components/typography/p.styled'
import RoundBtn from '../components/styled-components/form-elements/round-btn.styled'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
		<div
			style={{
				backgroundImage:
					'url(' +
					'https://cdn.discordapp.com/attachments/1004269075272323092/1005165816825790546/circles_group.png' +
					')',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: '100vh',
			}}
		>
			<header>
				<Navbar landing={true} />
			</header>
			<MainStyled>
				<h1 style={{ fontSize: '5rem', textAlign: 'center' }}>
					Ready to help your
					<br />
					fellow students?
				</h1>
				<P
					style={{
						textAlign: 'center',
						marginBlock: 'calc(var(--padding-block) / 2)',
					}}
				>
					Buy, Sell and help your fellow students. what are you waiting for?
				</P>
				<Link
					to='/signup'
					style={{
						display: 'grid',
						placeContent: 'center',
						textDecoration: 'none',
						marginBlock: 'var(--padding-block)',
					}}
				>
					<RoundBtn style={{ margin: 'auto' }}>Sign Up Now</RoundBtn>
				</Link>
			</MainStyled>
		</div>
	)
}

export default Landing
