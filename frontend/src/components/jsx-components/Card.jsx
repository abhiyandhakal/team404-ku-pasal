import RoundBtn from '../styled-components/form-elements/round-btn.styled'
import CardStyled from '../styled-components/main/card.styled'
import H3 from '../styled-components/typography/h3.styled'
import P from '../styled-components/typography/p.styled'
import { Link, useParams } from 'react-router-dom'

const Card = (product) => {
	const { userId } = useParams()
	const { id, title, price, img } = product

	return (
		<CardStyled>
			<img src={img} alt={title} />
			<Link
				style={{
					color: 'inherit',
					textDecoration: 'none',
				}}
				to={`/${userId}/${id}`}
			>
				<H3 style={{ marginInline: 'calc(var(--padding-inline) / 4)' }}>
					{title}
				</H3>
			</Link>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginInline: 'calc(var(--padding-inline) / 4)',
				}}
			>
				<P>NRs. {price}</P>
				<Link to={`/${userId}/${id}`}>
					<RoundBtn>Check out</RoundBtn>
				</Link>
			</div>
		</CardStyled>
	)
}

export default Card
