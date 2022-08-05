import styled from 'styled-components'

const VerticalNavStyled = styled.nav`
	position: relative;

	h2 {
		margin-left: var(--padding-inline);
	}

	ul {
		list-style: none;
		margin-left: var(--padding-inline);

		li {
			margin-bottom: calc(var(--padding-block) / 2);
		}

		a {
			text-decoration: none;
			color: var(--text-clr-2);
			font-size: var(--fz-p);
		}
	}

	&::before {
		content: '';
		height: 100%;
		width: 4px;
		background-color: currentColor;
		position: absolute;
	}
`

export default VerticalNavStyled
