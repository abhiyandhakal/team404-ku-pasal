import SignupForm from '../components/jsx-components/SignupForm'
import LoginNavbar from "../components/jsx-components/LoginNavbar"
import background from '../assets/signup_bg.png'


const Signup = () => {
	const myImage = {
		backgroundImage: `url(${background})`,
		backgroundPosition: 'center',
		backgroundRepeat: "no-repeat",
		backgroundSize: 'cover',
		height: "100vh",
		width: "100%",
	}
	return (
		<div style={myImage}>
			<header>
				<LoginNavbar />
				<SignupForm />
			</header>
		</div>
	)
}

export default Signup
