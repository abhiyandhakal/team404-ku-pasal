import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/jsx-components/Navbar'
import RoundBtn from '../components/styled-components/form-elements/round-btn.styled'
import ArticleStyled from '../components/styled-components/main/article.styled'
import MainStyled from '../components/styled-components/main/main.styled'
import H2 from '../components/styled-components/typography/h2.styled'
import H3 from '../components/styled-components/typography/h3.styled'
import P from '../components/styled-components/typography/p.styled'
import RoundBtnInverted from '../components/styled-components/form-elements/round-btn-inverted.styled'

import { gql, useQuery } from '@apollo/client'

const PRODUCT_BY_ID = gql`
	query ProductByID($_id: String!) {
		productByID(_id: $_id) {
			_id
			name
			description
			category
			available
			createdAt
			thumbnail

			seller {
				_id
				username
				email
				phoneNumber
				profile {
					avatar
					address
				}
			}
			price
		}
	}
`
const Product = () => {
	const { productId } = useParams()

	const { data, error } = useQuery(PRODUCT_BY_ID, {
		variables: { _id: productId },
	})

	if (!data) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}
	return (
		<>
			<header>
				<Navbar />
			</header>
			<MainStyled
				style={{
					display: 'grid',
					gridTemplateColumns: '.5fr 1.5fr',
					gap: 'var(--padding-block)',
				}}
			>
				<div
					style={{ gridRow: 'span 2', display: 'grid', placeItems: 'center' }}
				>
					<img
						src={data.productByID.thumbnail}
						alt={data.productByID.name}
						style={{
							height: '95%',
							aspectRatio: 1,
							objectFit: 'cover',
							borderRadius: 'var(--border-radius)',
							boxShadow: 'var(--box-shadow-2)',
						}}
					/>
					<RoundBtn>Buy Now</RoundBtn>
				</div>

				<ArticleStyled>
					<H2>{data.productByID.name}</H2>
					<P>
						Price: <b>{data.productByID.price}</b>
					</P>
					<P>
						Category:{' '}
						<b style={{ textTransform: 'capitalize' }}>
							{data.productByID.category}
						</b>
					</P>
					<P>
						Seller:{' '}
						<b style={{ textTransform: 'capitalize' }}>
							{data.productByID.seller.username}
						</b>
					</P>
					<P>
						Preferred delivery address: <b>{data.productByID.seller.address}</b>
					</P>
				</ArticleStyled>
				<ArticleStyled>
					<H3>Description: </H3>
					<P>{data.productByID.description}</P>
				</ArticleStyled>
			</MainStyled>

			<Link
				to={`/${data.productByID.seller._id}/`}
				style={{
					position: 'fixed',
					bottom: 'var(--padding-block)',
					right: 'var(--padding-inline)',
				}}
			>
				<RoundBtnInverted>Continue Shopping</RoundBtnInverted>
			</Link>
		</>
	)
}

export default Product
