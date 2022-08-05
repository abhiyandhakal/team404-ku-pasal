import logo from '../../assets/logo.svg';
import StyledLoginNavbar from '../styled-components/header/login-navbar.styled';
import P from '../styled-components/typography/p.styled'

const LoginNavbar = () => {
  return (
    <StyledLoginNavbar>
            <img src={logo} alt="ku pasal"/>
            <section className='navSection'>
              <h3>About</h3>
              <h3>Help</h3>
            </section>
    </StyledLoginNavbar>
  )
}

export default LoginNavbar;