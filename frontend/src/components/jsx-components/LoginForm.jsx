import StyledForm from "../styled-components/form-elements/login-form.styled"
import H1 from "../styled-components/typography/h1.styled";
import H3 from "../styled-components/typography/h3.styled";

const LoginForm = () => {

  return (
    <form>
        <StyledForm>
            <H1>Welcome  back</H1>
            <div className="usernameLogin">
                <H3>Username / Email</H3>
                <input type="text" placeholder="Username"/>
            </div>

              <div className="usernamePassword">
                  <H3>Password</H3>
                  <input type="text" placeholder="Username" />
              </div>

              <button>Login</button>

              <p>Forgot your Password? </p>
              <h4>Don't have an account? <a href="/signup">create here.</a></h4>
        
        </StyledForm>
    </form>
  )
}

export default LoginForm;