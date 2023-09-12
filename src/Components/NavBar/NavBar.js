import React from 'react';
import logo from '~/Assets/Common/icons';
import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';

function NavBar(){
    const navigate = useNavigate();

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        navigate(link);
    }

    return(
        <nav className={styles.nav}>
            <ul className={styles.nav_links}>
                <li className={styles.nav_link} onClick={handleLink} data-link='/'>
                    <img className={styles.nav_logo} src={logo['logo']}/>
                </li>
                <li className={styles.nav_link} onClick={handleLink} data-link='/pricing'>
                    <a>Pricing</a>
                </li>
                <li className={styles.nav_link} onClick={handleLink} data-link='/about'>
                    <a>About</a>
                </li>
                <li className={styles.nav_link} onClick={handleLink} data-link='/contact'>
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