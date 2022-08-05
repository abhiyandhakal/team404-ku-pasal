import styled from 'styled-components'

const ThemeTogglerStyled = styled.input.attrs({ type: 'checkbox' })`
	all: unset;

	&::after {
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		content: '${(props) => (props.theme === 'dark' ? '\f186' : '\f185')}';
		font-size: 2rem;
		color: ${(props) =>
			props.landing
				? props.theme === 'dark'
					? '#dfff00'
					: 'var(--text-clr-1)'
				: '#dfff00'};
		display: inline-block;
		font-style: normal;
		font-variant: normal;
		text-rendering: auto;
		cursor: pointer;
		-webkit-font-smoothing: antialiased;
	}
`

export default ThemeTogglerStyled
