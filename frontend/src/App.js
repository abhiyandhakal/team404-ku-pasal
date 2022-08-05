import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route path='/:userId' element={<Home />} />
			<Route path='/:userId/about' element={<About />} />
			<Route path='/about' element={<About />} />
			<Route path='/:userId/dashboard' element={<Dashboard />} />
			<Route path='/:userId/cart' element={<Cart />} />
			<Route path='/:userId/cart' element={<Cart />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
		</Routes>
	)
}

export default App
