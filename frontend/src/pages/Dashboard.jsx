import Navbar from '../components/jsx-components/Navbar'
import UploadImage from '../components/jsx-components/UploadImage'
import MainStyled from '../components/styled-components/main/main.styled'
import ArticleStyled from '../components/styled-components/main/article.styled'
import ProductFormStyled from '../components/styled-components/form-elements/product-form.styled'
import H2 from '../components/styled-components/typography/h2.styled'
import { Link, useParams } from 'react-router-dom'
import RoundBtn from '../components/styled-components/form-elements/round-btn.styled'
import RoundBtnInverted from '../components/styled-components/form-elements/round-btn-inverted.styled'
import { useState } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'

const formElements = [
	{
		id: 1,
		title: 'Product name: ',
		type: 'text',
		placeholder: '',
	},
	{
		id: 2,
		title: 'Category',
		type: 'text',
		placeholder: 'Eg. Furniture',
	},
	{
		id: 3,
		title: 'Price (NRs.)',
		type: 'number',
		placeholder: '',
	},
]

const NEW_PRODUCT = gql`
	mutation NewProduct(
		$price: Float!
		$description: String!
		$name: String!
		$category: String!
		$thumbnail: String!
	) {
		newProduct(
			price: $price
			description: $description
			name: $name
			category: $category
			thumbnail: $thumbnail
		) {
			_id
			name
			description
			available
			category
			thumbnail
			price
		}
	}
`

const ME = gql`
	query Me {
		me {
			user {
				_id
				username
				profile {
					avatar
				}
			}
		}
	}
`

const Dashboard = () => {
	const userId = useParams()
	const [newProduct, { error }] = useMutation(NEW_PRODUCT)
	const { data: meData } = useQuery(ME)

	// use state
	const [desc, setDesc] = useState('')
	const [product, setProduct] = useState('')
	const [category, setCategory] = useState('')
	const [price, setPrice] = useState()
	const [thumbnail, setThumbnail] = useState('')
	const [err, setErr] = useState('')
	const [clicked, setClicked] = useState(false)

	const stateArr = [setProduct, setCategory, setPrice]

	const handleClick = () => {
		newProduct({
			variables: {
				price: parseInt(price),
				description: desc,
				name: product,
				category: category,
				thumbnail: thumbnail,
			},
		})
		if (!error) {
			setErr('hurray!!!')
			setClicked(true)
		}
	}

	return (
		<>
			<header>
				<Navbar profilePic={meData ? meData.me.user.profile.avatar : null} />
			</header>

			<div
				style={{
					margin: 'var(--padding-block) var(--margin-inline)',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Link to={`/${userId}/`}>
					<RoundBtnInverted>Continue shopping</RoundBtnInverted>
				</Link>
				<RoundBtn onClick={handleClick} disabled={clicked}>
					Add to pasal
				</RoundBtn>
			</div>

			<MainStyled
				style={{
					display: 'grid',
					gridTemplateColumns: 'auto auto',
					gap: ' var(--padding-block)',
				}}
			>
				<ArticleStyled style={{ gridRow: 'span 2' }}>
					<H2>Product Details: </H2>
					<ProductFormStyled onClick={(e) => e.preventDefault()}>
						{formElements.map(({ id, title, type, placeholder }, index) => {
							return (
								<div className='elementContainer' key={id}>
									<label htmlFor={id}>{title}</label>
									<input
										type={type}
										placeholder={placeholder}
										onChange={(e) => stateArr[index](e.target.value)}
									/>
								</div>
							)
						})}
					</ProductFormStyled>
				</ArticleStyled>

				<UploadImage setThumbnail={setThumbnail} />

				<ArticleStyled>
					<H2>Description: </H2>
					<textarea onChange={(e) => setDesc(e.target.value)} required />
				</ArticleStyled>
			</MainStyled>
			{err ? (
				<div
					style={{
						padding: 'calc(var(--padding-block) / 2)',
						background: 'var(--secondary-bg)',
						position: 'absolute',
						top: 'calc(var(--navbar-height + var(--padding-block)))',
						left: '50%',
					}}
				>
					<p>{err}</p>
				</div>
			) : null}
		</>
	)
}

function Popup({ message }) {
	return (
		<div
			style={{
				padding: 'calc(var(--padding-block) / 2)',
				background: 'var(--secondary-bg)',
				position: 'absolute',
				inset: 0,
			}}
		>
			<p>{message ? message : null}</p>
		</div>
	)
}

export default Dashboard
