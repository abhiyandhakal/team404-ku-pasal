import StyledSignupForm from '../styled-components/form-elements/signup-form.styled'
import H1 from '../styled-components/typography/h1.styled'
import P from '../styled-components/typography/p.styled'
import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const REGISTER = gql`
	mutation register($options: UserRegisterInput!) {
		register(options: $options) {
			user {
				_id
				id
				username
				email
				createdAt
				updatedAt
				isEmailVerified
				profile {
					avatar
					address
					bio
				}
				authority {
					level
				}
			}
		}
	}
`

const SignupForm = () => {
	const [register, { error }] = useMutation(REGISTER)

	// use states
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [number, setNumber] = useState('')
	const [address, setAddress] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		register({
			variables: {
				options: {
					username: username,
					email: email,
					phoneNumber: number,
					password: password,
					profile: {
						address: address,
					},
				},
			},
		})

		if (error) return <H1>{error}</H1>
		else return <H1>Check your mail for confirmation.</H1>
	}

	return (
		<StyledSignupForm onSubmit={handleSubmit}>
			<H1>Create Account</H1>
			<input
				type='text'
				placeholder='Username'
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Email address'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Address'
				onChange={(e) => setAddress(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				onChange={(e) => setPassword(e.target.value)}
			/>
			<input
				type='tel'
				placeholder='Phone number'
				onChange={(e) => setNumber(e.target.value)}
			/>
			<div className='checkBox'>
				<input type='checkbox' />
				<p>I agree with the terms and conditions.</p>
			</div>

			<div className='signupOptions'>
				<button>Sign Up</button>
				<P>Already have an Account?</P>
				<Link to='\login'>Log in?</Link>
			</div>
		</StyledSignupForm>
	)
}

export default SignupForm
