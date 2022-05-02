import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Routes>
				<Route path='/home' element={<HomePage />}></Route>
				<Route path='/product/:idProduct' element={<Product />}></Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
