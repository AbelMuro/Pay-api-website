import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import commonIcons from '~/Assets/Common/icons';


//need to work on the mobile
function FooterBar() {
    return(
        <footer className={styles.footer}>
            <img className={styles.circle} src={commonIcons['circle']}/>
            <div className={styles.footer_content}>
                <ul className={styles.footer_links}>
                    <li className={styles.footer_link}>
                        <img src={icons['logo']}/>
                    </li>
                    <li className={styles.footer_link}>
                        Pricing
                    </li>
                    <li className={styles.footer_link}>
                        About
                    </li>
                    <li className={styles.footer_link}>
                        Contact
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