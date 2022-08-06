import StyledForm from '../styled-components/form-elements/login-form.styled'
import H1 from '../styled-components/typography/h1.styled'
import H3 from '../styled-components/typography/h3.styled'
import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CHECK_LOGIN = gql`
	mutation ($password: String!, $username: String!) {
		login(password: $password, username: $username) {
			user {
				_id
			}
		}
	}
`

const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const [user, { data, error }] = useMutation(CHECK_LOGIN)

	if (error) {
		return <div>Error: {JSON.stringify(error)}</div>
	}
	if (!user) {
		return 'Loading...'
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		user({
			variables: {
				username: username,
				password: password,
			},
		})

		if (data) {
			console.log(data)
			navigate(`/home/`, { replace: true })
		}
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<H1>Welcome back</H1>
			<div className='usernameLogin'>
				<H3>Username / Email</H3>
				<input
					type='text'
					placeholder='Username'
					required
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>

			<div className='usernamePassword'>
				<H3>Password</H3>
				<input
					type='text'
					placeholder='Password'
					required
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button type='submit'>Login</button>

			<p>Forgot your Password? </p>
			<h4>
				Don't have an account? <a href='/signup'>create here.</a>
			</h4>
		</StyledForm>
	)
}

export default LoginForm
