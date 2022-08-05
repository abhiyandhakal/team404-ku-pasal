import styled from 'styled-components'

const HeroStyled = styled.section`
	height: var(--hero-height);
	background-color: var(--secondary-bg);
	border-radius: var(--border-radius);
	margin: var(--margin-block) var(--margin-inline);
	padding: var(--padding-block) var(--padding-inline);
	box-shadow: var(--box-shadow-2);

	/* to style children */
	display: grid;
	grid-template-columns: 0.6fr 0.4fr;
	overflow: hidden;
	gap: var(--padding-inline);

	img {
		object-fit: cover;
		width: 100%;
		height: calc(var(--hero-height) - var(--padding-block) * 2);
		border-radius: var(--border-radius);
	}

	div {
		display: grid;
	}
`

export default HeroStyled
