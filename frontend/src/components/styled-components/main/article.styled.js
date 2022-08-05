import styled from 'styled-components'

const ArticleStyled = styled.article`
	padding: var(--padding-block) var(--padding-inline);
	display: grid;
	background-color: var(--secondary-bg);
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow-2);

	& > * {
		margin-bottom: calc(var(--padding-block) / 3);
	}
`

export default ArticleStyled
