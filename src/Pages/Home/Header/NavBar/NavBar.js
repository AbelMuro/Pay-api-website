import React from 'react';
import logo from '~/Assets/Common/icons';
import styles from './styles.module.css';

function NavBar(){
    return(
        <nav className={styles.nav}>
            <ul className={styles.nav_links}>
                <li className={styles.nav_link}>
                    <img className={styles.nav_logo} src={logo['logo']}/>
                </li>
                <li className={styles.nav_link}>
                    <a>Pricing</a>
                </li>
                <li className={styles.nav_link}>
                    <a>About</a>
                </li>
                <li className={styles.nav_link}>
                    <a>Contact</a>
                </li>
            </ul> 
            <button className={styles.nav_demo}> 
                Schedule a Demo
            </button>  
        </nav>
    )
}

export default NavBar;