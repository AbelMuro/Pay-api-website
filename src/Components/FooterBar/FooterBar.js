import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import commonIcons from '~/Assets/Common/icons';
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';

function FooterBar() {
    const navigate = useNavigate();

    const linkVariants = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.6}
        }
    }

    const iconVariants = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1
        }
    }

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        navigate(link);
        window.scrollTo(0, 0);
    }

    return(
        <footer className={styles.footer}>
            <img className={styles.circle} src={commonIcons['circle']}/>
            <div className={styles.footer_content}>
                <motion.ul className={styles.footer_links} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.6}} transition={{staggerChildren: 0.4}}>
                    <motion.li className={styles.footer_link} onClick={handleLink} data-link='/' variants={linkVariants}>
                        <img src={icons['logo']}/>
                    </motion.li>
                    <motion.li className={styles.footer_link} onClick={handleLink} data-link='/pricing' variants={linkVariants}>
                        <a>Pricing</a>
                    </motion.li>
                    <motion.li className={styles.footer_link} onClick={handleLink} data-link='/about' variants={linkVariants}>
                        <a>About</a>
                    </motion.li>
                    <motion.li className={styles.footer_link} onClick={handleLink} data-link='/contact' variants={linkVariants}>
                        <a>Contact</a>
                    </motion.li>
                </motion.ul>
                <motion.ul className={styles.footer_socialLinks} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.6}} transition={{staggerChildren: 0.2}}>
                    <motion.li className={styles.footer_socialLink} variants={iconVariants}></motion.li>
                    <motion.li className={styles.footer_socialLink} variants={iconVariants}></motion.li>
                    <motion.li className={styles.footer_socialLink} variants={iconVariants}></motion.li>
                </motion.ul>
            </div>
        </footer>
    )
}

export default FooterBar;