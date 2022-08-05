import styled from 'styled-components'

const UploadImageStyled = styled.button`
	all: unset;
	cursor: pointer;
	border: 2px dashed var(--text-clr-1);
	border-radius: var(--border-radius);
	display: grid;
	place-content: center;
	place-items: center;

	&:hover {
		opacity: 0.8;
	}

	svg {
		font-size: 5rem;
	}
`

export default UploadImageStyled
