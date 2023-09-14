import React from 'react';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import NavBar from './Components/NavBar';
import MobileNavBar from './Components/MobileNavBar';
import FooterBar from './Components/FooterBar';
import useMediaQuery from './Assets/Hooks/useMediaQuery.js';
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
                <Route path='/about' element={<AboutUs/>}/>  
                <Route path='/contact' element={<ContactUs/>}/>
            </Routes>
            <FooterBar/>
        </BrowserRouter>
    )
}

export default App;