import React from 'react';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';
import styles from './styles.module.css';
import useMediaQuery from '~/Assets/Hooks/useMediaQuery.js';

function Header(){
    const mobile = useMediaQuery('(max-width: 610px)');

    return(
        <header className={styles.header}>
            {mobile ? <MobileNavBar/> : <NavBar/>}
        </header>
    )
}

export default Header;