import Navbar from '../components/jsx-components/Navbar'
import UploadImage from '../components/jsx-components/UploadImage'
import MainStyled from '../components/styled-components/main/main.styled'
import ArticleStyled from '../components/styled-components/main/article.styled'
import ProductForm from '../components/jsx-components/ProductForm'
import H2 from '../components/styled-components/typography/h2.styled'
import { Link, useParams } from 'react-router-dom'
import RoundBtn from '../components/styled-components/form-elements/round-btn.styled'
import RoundBtnInverted from '../components/styled-components/form-elements/round-btn-inverted.styled'

const Dashboard = () => {
	const userId = useParams()

	return (
		<>
			<header>
				<Navbar />
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
				<Link to=''>
					<RoundBtn>Add to pasal</RoundBtn>
				</Link>
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
					<ProductForm />
				</ArticleStyled>

				<UploadImage />

				<ArticleStyled>
					<H2>Description: </H2>
					<textarea />
				</ArticleStyled>
			</MainStyled>
		</>
	)
}

export default Dashboard
