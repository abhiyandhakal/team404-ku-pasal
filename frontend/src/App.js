import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import BuyRequestSent from './pages/BuyRequestSent';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Landing />} />
			<Route path='/:userId' element={<Home />} />
			<Route path='/:userId/about' element={<About />} />
			<Route path='/about' element={<About />} />
			<Route path='/:userId/sell' element={<Dashboard />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
			<Route path='/:userId/product/:productId' element={<Product />} />
			<Route path='/:userId/profile' element={<Profile />} />
			<Route path='/adminlogin' element={<AdminLogin />} />
			<Route path='/:userId/admin' element={<Admin />} />
			<Route path='/buyrequestsent' element={<BuyRequestSent />} />
		</Routes>
	);
};

export default App;
