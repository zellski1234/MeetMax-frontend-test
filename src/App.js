import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Photos } from './Pages/Photos';
import Cart from './Pages/Cart';
import { Header } from './Components/Header';
import {AppProvider} from './Components/AppContext'

function App() {
  return (
    <AppProvider>
       <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Photos />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>    
       </BrowserRouter>
      </AppProvider>
  );
}

export default App;
