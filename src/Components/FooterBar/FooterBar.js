import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import commonIcons from '~/Assets/Common/icons';
import { useNavigate } from 'react-router-dom';

function FooterBar() {
    const navigate = useNavigate();

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        navigate(link);
    }

    return(
        <footer className={styles.footer}>
            <img className={styles.circle} src={commonIcons['circle']}/>
            <div className={styles.footer_content}>
                <ul className={styles.footer_links}>
                    <li className={styles.footer_link} onClick={handleLink} data-link='/'>
                        <img src={icons['logo']}/>
                    </li>
                    <li className={styles.footer_link} onClick={handleLink} data-link='/pricing'>
                        <a>Pricing</a>
                    </li>
                    <li className={styles.footer_link} onClick={handleLink} data-link='/about'>
                        <a>About</a>
                    </li>
                    <li className={styles.footer_link} onClick={handleLink} data-link='/contact'>
                        <a>Contact</a>
                    </li>
                </ul>
                <ul className={styles.footer_socialLinks}>
                    <li className={styles.footer_socialLink}></li>
                    <li className={styles.footer_socialLink}></li>
                    <li className={styles.footer_socialLink}></li>
                </ul>
            </div>
        </footer>
    )
}

export default FooterBar;