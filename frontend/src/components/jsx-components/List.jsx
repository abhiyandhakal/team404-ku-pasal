import SectionStyled from '../styled-components/main/section.styled'
import H2 from '../styled-components/typography/h2.styled'
import Card from './Card'
import { v4 as uuid } from 'uuid'

const List = ({ filteredList, category }) => {
	return (
		<SectionStyled>
			<H2>{category}</H2>
			<div className='card-container'>
				{filteredList.map((product) => {
					const uniqueKey = uuid()

					return <Card key={uniqueKey} {...product} />
				})}
			</div>
		</SectionStyled>
	)
}

export default List
