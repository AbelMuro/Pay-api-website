import React from 'react';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import MobileNavBar from './Components/MobileNavBar';
import FooterBar from './Components/FooterBar';
import useMediaQuery from './Assets/Hooks/useMediaQuery.js';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

function App() {
    const mobile = useMediaQuery('(max-width: 610px)');

    return(
        <BrowserRouter>
            {mobile ? <MobileNavBar/> : <NavBar/>}
            <Routes>
                <Route path='/' element={<Home/>}/>     
                <Route path='/pricing' element={<Pricing/>}/>       
            </Routes>
            <FooterBar/>
        </BrowserRouter>
    )
}

export default App;