import styled from 'styled-components'

const SearchbarStyled = styled.input.attrs({
	type: 'search',
	placeholder: 'Search item here...',
})`
	background: var(--searchbar-bg);
	border-radius: 100vw;
	width: 30vw;
	border: none;
	padding: 0.5em 1em;
`

export default SearchbarStyled
