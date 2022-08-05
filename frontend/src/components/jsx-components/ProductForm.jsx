import ProductFormStyled from '../styled-components/form-elements/product-form.styled'

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
	{
		id: 4,
		title: 'Contact No.: ',
		type: 'tel',
		placeholder: '',
	},
	{
		id: 5,
		title: 'Used for: ',
		type: 'text',
		placeholder: 'Eg. 1 year',
	},
	{
		id: 6,
		title: 'Selling address:',
		type: 'text',
		placeholder: 'Eg. KU Gate',
	},
]

const ProductForm = () => {
	return (
		<ProductFormStyled>
			{formElements.map(({ id, title, type, placeholder }) => {
				return (
					<div className='elementContainer' key={id}>
						<label htmlFor={id}>{title}</label>
						<input type={type} placeholder={placeholder} />
					</div>
				)
			})}
		</ProductFormStyled>
	)
}

export default ProductForm
