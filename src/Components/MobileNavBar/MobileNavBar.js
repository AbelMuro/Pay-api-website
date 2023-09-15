import React, {useState, useEffect, useRef} from 'react';
import icons from '~/Assets/Common/icons';
import navIcons from './icons'
import styles from './styles.module.css';
import {useNavigate, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';

function MobileNavBar(){
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const dialogRef = useRef();
    const navigate = useNavigate();

    const navVariants = {
        hidden: {y: -200, opacity: 0},
        show: {y: 0, opacity: 1, transition: {duration: 0.7}},
    }

    const dialogVariants = {
        hidden: {
            clipPath: 'circle(0px at 260px 60px)',
            transition: {when: 'afterChildren', duration: 0.5},
        },
        show: {
            clipPath: 'circle(100vh at 40px 40px)',
            transition: {when: 'beforeChildren', duration: 0.7, staggerChildren: 0.2}
        }
    }

    const menuVariants = {
        hidden: {
            y: -50,
            opacity: 0
        }, 
        show : {
            y: 0,
            opacity: 1,
            transition: {duration: 0.2}
        }
    }

    const lineVariants = {
        hidden: {
            y: -50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 0.15,
            transition: {duration: 0.2}
        }
    }

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        navigate(link);
        setOpen(false);
    }

    const handleMenu = () => {
        setOpen(!open);
    }


    return(
        <>
            <motion.nav className={styles.nav} initial='hidden' animate='show' transition={{staggerChildren: 0.6}}>
                <motion.img className={styles.nav_logo} src={icons['logo']} variants={navVariants} onClick={handleLink} data-link='/'/>
                <motion.img className={styles.nav_menu} src={navIcons['menu']} variants={navVariants} onClick={handleMenu}/>
                {location.pathname !== '/' && <motion.img className={styles.circle} variants={navVariants} src={icons['circle']}/>}
            </motion.nav>     
            <motion.dialog className={styles.dialog} open={open} ref={dialogRef} variants={dialogVariants} animate={open ? 'show' : 'hidden'}>
                <motion.img src={icons['circle']} className={styles.dialog_circle} variants={menuVariants}/>                     
                <motion.div className={styles.dialog_close} onClick={handleMenu} variants={menuVariants}/>
                <motion.hr className={styles.dialog_line} variants={lineVariants}/>
                <ul className={styles.dialog_links}>
                    <motion.li className={styles.dialog_link} onClick={handleLink} data-link='/pricing' variants={menuVariants}>
                        Pricing
                    </motion.li>
                    <motion.li className={styles.dialog_link} onClick={handleLink} data-link='/about' variants={menuVariants}>
                        About
                    </motion.li>
                    <motion.li className={styles.dialog_link} onClick={handleLink} data-link='/contact' variants={menuVariants}>
                        Contact
                    </motion.li>
                    <motion.li className={styles.dialog_link} variants={menuVariants}>
                        <button className={styles.dialog_demo}>
                            Schedule a Demo
                        </button>
                    </motion.li>
                </ul>
            </motion.dialog>  
        </>

    )
}

export default MobileNavBar;