import styled from 'styled-components'

const ProductFormStyled = styled.div`
	display: grid;
	gap: calc(var(--padding-block) / 2);

	.elementContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;

		input {
			border: none;
			background-color: var(--searchbar-bg);
			border-radius: calc(var(--border-radius) / 4);
			padding: calc(var(--padding-block) / 4);
		}
	}
`

export default ProductFormStyled
