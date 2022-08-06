import StyledSignupForm from "../styled-components/form-elements/signup-form.styled"
import H1 from "../styled-components/typography/h1.styled"
import P from "../styled-components/typography/p.styled"
import {Link} from "react-router-dom"

const SignupForm = () => {
  return (
    <form>
        <StyledSignupForm>
            <H1>Create Account</H1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <div className="checkBox">
                <input type="checkbox"/>
                <p>I agree with the terms and conditions.</p>
            </div>

            
            <div className="signupOptions">
                <button>Sign Up</button>
                <P>Already have an Account?</P>
                <a href="\login">Log in?</a>
            </div>
        </StyledSignupForm>

    </form>
  )
}

export default SignupForm