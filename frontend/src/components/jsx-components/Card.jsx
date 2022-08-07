import RoundBtn from '../styled-components/form-elements/round-btn.styled'
import CardStyled from '../styled-components/main/card.styled'
import H3 from '../styled-components/typography/h3.styled'
import P from '../styled-components/typography/p.styled'
import { Link } from 'react-router-dom'

const Card = (product) => {
	const { _id, name, price, thumbnail } = product

	return (
		<CardStyled>
			<img src={thumbnail} alt={name} />
			<Link
				style={{
					color: 'inherit',
					textDecoration: 'none',
				}}
				to={`/1/product/${_id}`}
			>
				<H3 style={{ marginInline: 'calc(var(--padding-inline) / 4)' }}>
					{name}
				</H3>
			</Link>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginInline: 'calc(var(--padding-inline) / 4)',
					marginBottom: 'calc(var(--padding-block) / 4)',
				}}
			>
				<P>NRs. {price}</P>
				<Link to={`/1/product/${_id}`}>
					<RoundBtn>Check out</RoundBtn>
				</Link>
			</div>
		</CardStyled>
	)
}

export default Card
