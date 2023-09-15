import React from 'react';
import images from '~/Assets/Common/icons';
import styles from './styles.module.css';
import {useNavigate, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';

function NavBar(){
    const navigate = useNavigate();
    const location = useLocation();

    const variantsLinks = {
        hidden: {y: -100},
        show: {y: 0}
    }

    const variantsCircle = {
        hidden: {y: -300},
        show: {y: 0}
    }

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        navigate(link);
    }

    return(
        <motion.nav className={styles.nav} initial='hidden' animate='show' transition={{staggerChildren: 0.4}}>
            <motion.ul className={styles.nav_links} >
                <motion.li className={styles.nav_link} onClick={handleLink} data-link='/' variants={variantsLinks}>
                    <img className={styles.nav_logo} src={images['logo']}/>
                </motion.li>
                <motion.li className={styles.nav_link} onClick={handleLink} data-link='/pricing' variants={variantsLinks}>
                    <a>Pricing</a>
                </motion.li>
                <motion.li className={styles.nav_link} onClick={handleLink} data-link='/about' variants={variantsLinks}>
                    <a>About</a>
                </motion.li>
                <motion.li className={styles.nav_link} onClick={handleLink} data-link='/contact' variants={variantsLinks}>
                    <a>Contact</a>
                </motion.li>
            </motion.ul> 
            <motion.button className={styles.nav_demo} variants={variantsLinks}> 
                Schedule a Demo
            </motion.button>  
            {location.pathname !== '/' && 
                <motion.img className={styles.circle} src={images['circle']} variants={variantsCircle}/>}
        </motion.nav>
    )
}

export default NavBar;