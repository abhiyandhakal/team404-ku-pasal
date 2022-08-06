import Navbar from '../components/jsx-components/Navbar'
import MainStyled from '../components/styled-components/main/main.styled'
import ProductFormStyled from '../components/styled-components/form-elements/product-form.styled'
import ArticleStyled from '../components/styled-components/main/article.styled'
import UploadImage from '../components/jsx-components/UploadImage'
import { Link, useParams } from 'react-router-dom'
import RoundBtnInverted from '../components/styled-components/form-elements/round-btn-inverted.styled'
import RoundBtn from '../components/styled-components/form-elements/round-btn.styled'
import H2 from '../components/styled-components/typography/h2.styled'
import H3 from '../components/styled-components/typography/h3.styled'
import P from '../components/styled-components/typography/p.styled'

const formElements = [
	{
		id: 1,
		title: 'Username: ',
		type: 'text',
		placeholder: '',
	},
	{
		id: 3,
		title: 'Phone No.: ',
		type: 'tel',
		placeholder: '',
	},
	{
		id: 4,
		title: 'Email: ',
		type: 'text',
		placeholder: 'Eg. john@example.com',
	},
	{
		id: 5,
		title: 'Address: ',
		type: 'text',
		placeholder: 'Eg. KU Gate',
	},
]

const Profile = () => {
	const { userId } = useParams()

	return (
		<>
			<header>
				<Navbar />
			</header>
			<MainStyled
				style={{
					display: 'grid',
					gridTemplateColumns: 'auto auto',
					gap: ' var(--padding-block)',
				}}
			>
				<ArticleStyled>
					<ProductFormStyled>
						{formElements.map(({ id, title, type, placeholder }) => {
							return (
								<div className='elementContainer' key={id}>
									<label htmlFor={id}>{title}</label>
									<input type={type} placeholder={placeholder} />
								</div>
							)
						})}
						<div className='elementContainer'>
							<label htmlFor='6'>Bio: </label>
							<textarea
								name='bio'
								id='6'
								cols='30'
								rows='10'
								style={{
									width: '20.5rem',
									aspectRatio: 2,
									borderRadius: 'calc(var(--border-radius) / 2)',
									border: 'none',
									resize: 'none',
								}}
							/>
						</div>
					</ProductFormStyled>
				</ArticleStyled>
				<UploadImage />
			</MainStyled>

			<MainStyled>
				<H2 style={{ textAlign: 'center' }}>Your items</H2>
				<ArticleStyled
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(4,auto)',
						gap: 'var(--padding-inline)',
						alignContent: 'center',
					}}
				>
					<img
						src='image'
						alt='title'
						style={{
							borderRadius: 'var(--border-radius)',
							background: 'black',
							height: '100%',
							width: 'var(--margin-inline)',
						}}
					/>
					<div>
						<H3>Wrist Watch</H3>
						<P>Used for: 1 year</P>
					</div>
					<div>
						<H3>Description</H3>
						<P>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
							odit nulla eum rerum quam doloribus cumque deleniti, ad iure
							eveniet soluta fugit quia officiis accusamus vero eligendi
							necessitatibus enim non!
						</P>
					</div>
					<p style={{ fontSize: 'var(--fz-h3)' }}>NRs. 500 /-</p>
				</ArticleStyled>
				<p
					style={{
						marginBlock: 'var(--padding-block)',
						fontWeight: 100,
						textAlign: 'center',
					}}
				>
					No more items were found.
				</p>
			</MainStyled>

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: 'var(--padding-block) var(--margin-inline)',
				}}
			>
				<Link to={`/${userId}`}>
					<RoundBtnInverted>Continue Shopping</RoundBtnInverted>
				</Link>
				<RoundBtn>Save</RoundBtn>
			</div>
		</>
	)
}

export default Profile
