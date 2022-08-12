import { Link } from 'react-router-dom';
import Footer from '../components/jsx-components/Footer';
import Navbar from '../components/jsx-components/Navbar';
import RoundBtn from '../components/styled-components/form-elements/round-btn.styled';
import MainStyled from '../components/styled-components/main/main.styled';
import H2 from '../components/styled-components/typography/h2.styled';
import P from '../components/styled-components/typography/p.styled';

const BuyRequestSent = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<MainStyled>
				<H2>buy request sent</H2>
				<P>Please Check your mail.</P>
				<Link to='/1'>
					<RoundBtn style={{ marginBlock: 'var(--padding-block)' }}>
						Continue shopping
					</RoundBtn>
				</Link>
			</MainStyled>
			<Footer />
		</>
	);
};

export default BuyRequestSent;
