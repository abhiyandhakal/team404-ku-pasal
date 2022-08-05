import RoundBtn from '../styled-components/form-elements/round-btn.styled'
import CardStyled from '../styled-components/main/card.styled'
import H3 from '../styled-components/typography/h3.styled'
import P from '../styled-components/typography/p.styled'

const Card = (product) => {
	const { title, price, img } = product

	return (
		<CardStyled>
			<img src={img} alt={title} />
			<H3 style={{ marginInline: 'calc(var(--padding-inline) / 4)' }}>
				{title}
			</H3>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginInline: 'calc(var(--padding-inline) / 4)',
				}}
			>
				<P>NRs. {price}</P>
				<RoundBtn>Check out</RoundBtn>
			</div>
		</CardStyled>
	)
}

export default Card
