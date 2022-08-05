import { Link, useParams } from 'react-router-dom'
import NavbarStyled from '../styled-components/navbar.styled'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import SearchbarStyled from '../styled-components/searchbar.styled'
import ProfilePicStyled from '../styled-components/profile-pic.styled'
import ThemeTogglerStyled from '../styled-components/theme-toggler.styled'
import { useEffect, useState } from 'react'

const Navbar = () => {
	const { userId } = useParams()
	const userID = userId

	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

	useEffect(() => {
		if (theme === 'light') {
			localStorage.setItem('theme', 'light')
			document.getElementById('root').classList.add('light')
			document.getElementById('root').classList.remove('dark')
		} else {
			localStorage.setItem('theme', 'dark')
			document.getElementById('root').classList.add('dark')
			document.getElementById('root').classList.remove('light')
		}
	}, [theme, setTheme])

	return (
		<NavbarStyled>
			<ul>
				<li>
					{userID ? (
						<Link to={`/${userId}/`} className='logo'>
							<AiOutlineShoppingCart /> Ku-Mart
						</Link>
					) : (
						<Link to='/' className='logo'>
							<AiOutlineShoppingCart /> Ku-Mart
						</Link>
					)}
				</li>
				{userID ? (
					<>
						<li>
							<SearchbarStyled />
						</li>
						<li>
							<Link to={`/${userId}/cart`}>Cart</Link>
						</li>
						<li>
							<Link to={`/${userId}/about`}>About</Link>
						</li>
						<li>
							<Link to={`/${userId}/dashboard`}>Sell</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to={`/about`}>About</Link>
						</li>
						<li>
							<Link to={`/login`}>Login</Link>
						</li>
						<li>
							<Link to={`/signup`}>Sign up</Link>
						</li>
					</>
				)}
				<ThemeTogglerStyled
					theme={theme}
					onClick={() =>
						theme === 'light' ? setTheme('dark') : setTheme('light')
					}
				/>
				{userID ? (
					<>
						<li>
							<ProfilePicStyled src='https://unsplash.it/50/50' />
						</li>
					</>
				) : null}
			</ul>
		</NavbarStyled>
	)
}

export default Navbar
