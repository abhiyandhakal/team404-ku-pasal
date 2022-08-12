import Hero from '../components/jsx-components/Hero';
import List from '../components/jsx-components/List';
import Navbar from '../components/jsx-components/Navbar';
import MainStyled from '../components/styled-components/main/main.styled';
import { v4 as uuid } from 'uuid';
import Footer from '../components/jsx-components/Footer';

import { gql, useQuery } from '@apollo/client';

const PRODUCTS = gql`
	query Products {
		products {
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
				profile {
					address
					avatar
				}
			}
			price
		}
	}
`;

const Home = () => {
	const { data, error } = useQuery(PRODUCTS);
	if (error) {
		return <div>Error: {JSON.stringify(error)}</div>;
	}
	if (!data) {
		return 'Loading...';
	}

	const categoryList = [
		'all products',
		...new Set(data.products.map((product) => product.category)),
	];
	return (
		<>
			<header>
				<Navbar />
				<Hero />
			</header>
			<MainStyled>
				{categoryList.map((category) => {
					const uniqueId = uuid();

					const filteredList =
						category === 'all products'
							? data.products
							: data.products.filter(
									(product) => product.category === category
							  );
					return (
						<List
							key={uniqueId}
							filteredList={filteredList}
							category={category}
						/>
					);
				})}
			</MainStyled>
			<Footer />
		</>
	);
};

export default Home;
