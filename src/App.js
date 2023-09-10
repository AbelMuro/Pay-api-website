import React from 'react';
import NavBar from './Components/NavBar';
import MobileNavBar from './Components/MobileNavBar';
import useMediaQuery from './Assets/Hooks/useMediaQuery.js';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

function App() {
    const mobile = useMediaQuery('(max-width: 610px)');

    return(
        <BrowserRouter>
            {mobile ? <MobileNavBar/> : <NavBar/>}
            <Routes>
                <Route path='/' element={<Home/>}/>            
            </Routes>
        </BrowserRouter>
    )
}

export default App;