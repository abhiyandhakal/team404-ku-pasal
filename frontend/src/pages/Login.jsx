import LoginNavbar from '../components/jsx-components/LoginNavbar';
import LoginForm from '../components/jsx-components/LoginForm';
import background from '../assets/login_page_bg.png';

const Login = () => {
	const myImage = {
		backgroundImage: `url(${background})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		minHeight: '100vh',
		width: '100%',
	};
	return (
		<>
			<div style={myImage}>
				<LoginNavbar />
				<LoginForm formText='login here' />
			</div>
		</>
	);
};

export default Login;
