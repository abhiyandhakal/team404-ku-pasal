import logo from '../../assets/logo.svg';
import StyledLoginNavbar from '../styled-components/header/login-navbar.styled';
import {Link} from "react-router-dom"

const LoginNavbar = () => {
  return (
    <StyledLoginNavbar>
            <Link to={'/'}>
                  <img src={logo} alt="ku pasal"/>
            </Link>
            
            <section className='navSection'>
            <Link to='/about' style={{ color:"inherit"}}>
              <h3>About</h3>
            </Link>

        <Link to='/help' style={{ color: "inherit" }}>
          <h3>Help</h3>
        </Link>
              
          
            </section>
    </StyledLoginNavbar>
  )
}

export default LoginNavbar;