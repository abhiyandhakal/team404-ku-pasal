import styled from 'styled-components'

const SectionStyled = styled.section`
	margin-block: var(--margin-block);
	padding: var(--padding-block) var(--padding-inline);
	background-color: var(--secondary-bg);
	border-radius: var(--border-radius);
	position: relative;
	box-shadow: var(--box-shadow-2);

	&::before {
		content: '';
		position: absolute;
		height: 2px;
		width: calc(100% - var(--padding-inline) * 2);
		background-color: currentColor;
		top: calc(var(--padding-block) * 1.75);
		z-index: 0;
	}

	h2 {
		margin-left: calc(var(--margin-block));
		padding-inline: var(--padding-block);
		display: block;
		position: relative;
		width: fit-content;
		background-color: var(--secondary-bg);
		z-index: 1;
	}

	.card-container {
		display: grid;
		grid-auto-flow: column;
		gap: var(--padding-inline);
		overflow-x: auto;
	}
`

export default SectionStyled
