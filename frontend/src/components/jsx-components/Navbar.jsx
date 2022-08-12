import { Link, useParams } from 'react-router-dom';
import NavbarStyled from '../styled-components/header/navbar.styled';
import SearchbarStyled from '../styled-components/header/searchbar.styled';
import ProfilePicStyled from '../styled-components/header/profile-pic.styled';
import ThemeTogglerStyled from '../styled-components/header/theme-toggler.styled';
import { useEffect, useState } from 'react';
import logo from '../../assets/logo2x.png';
import { gql, useQuery } from '@apollo/client';

const ME = gql`
	query Me {
		me {
			user {
				_id
				username
				profile {
					avatar
				}
			}
		}
	}
`;

const Navbar = ({ landing }) => {
	const { userId } = useParams();
	const { data: meData } = useQuery(ME);

	const userID = userId;

	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	useEffect(() => {
		if (theme === 'light') {
			localStorage.setItem('theme', 'light');
			document.getElementById('root').classList.add('light');
			document.getElementById('root').classList.remove('dark');
		} else {
			localStorage.setItem('theme', 'dark');
			document.getElementById('root').classList.add('dark');
			document.getElementById('root').classList.remove('light');
		}
	}, [theme, setTheme]);

	return (
		<NavbarStyled landing={landing}>
			<ul>
				<li>
					{userID ? (
						<Link to={`/${userId}/`} className='logo'>
							<img src={logo} alt='KU-Pasal' />
						</Link>
					) : (
						<Link to='/' className='logo'>
							<img src={logo} alt='KU-Pasal' />
						</Link>
					)}
				</li>
				{userID ? (
					<>
						<li>
							<SearchbarStyled />
						</li>
						<li>
							<Link to={`/${userId}/about`}>About</Link>
						</li>
						<li>
							<Link to={`/${userId}/sell`}>Sell</Link>
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
					landing={landing}
					onClick={() =>
						theme === 'light' ? setTheme('dark') : setTheme('light')
					}
				/>
				{userID ? (
					<>
						<li>
							<Link to={`/${userId}/profile`}>
								<ProfilePicStyled
									src={meData ? meData.me.user.profile.avatar : null}
								/>
							</Link>
						</li>
					</>
				) : null}
			</ul>
		</NavbarStyled>
	);
};

export default Navbar;
