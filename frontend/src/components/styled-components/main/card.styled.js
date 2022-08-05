import styled from 'styled-components'

const CardStyled = styled.article`
	height: var(--card-height);
	width: calc(var(--card-height) * 0.7);
	display: grid;
	background-color: var(--card-bg);
	border-radius: var(--border-radius);
	overflow: hidden;
	margin-block: var(--padding-block);
	color: black;
	box-shadow: var(--box-shadow-4);

	img {
		width: 100%;
		object-fit: cover;
	}
`

export default CardStyled
