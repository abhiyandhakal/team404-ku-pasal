import styled from 'styled-components'

const NavbarStyled = styled.nav`
	display: grid;
	width: 100%;
	height: var(--navbar-height);
	background: ${(props) => (props.landing ? null : 'var(--header-footer-bg)')};
	display: grid;
	place-items: center;
	box-shadow: ${(props) => (props.landing ? null : 'var(--box-shadow-1)')};

	img {
		height: 4rem;
	}

	ul {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		list-style: none;

		a {
			text-decoration: none;
			color: ${(props) =>
				props.landing ? 'var(--text-clr-1)' : 'var(--text-clr-2)'};
			font-size: 1.1rem;
			text-transform: uppercase;
			font-weight: 500;
		}

		.logo {
			font-size: 2rem;
		}
	}
`

export default NavbarStyled
