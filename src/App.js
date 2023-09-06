import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Photos } from './Pages/Photos';
import Cart from './Pages/Cart';
import { Header } from './Components/Header';
import { AppProvider } from './Components/AppContext';
import Footer from './Components/Footer'; 
import Favorites from './Pages/Favorites';

function App() {
	return (
		<AppProvider>
			<BrowserRouter>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<Photos />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/favorites" element={<Favorites />} />
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;
