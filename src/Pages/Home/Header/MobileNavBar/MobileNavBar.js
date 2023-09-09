import React from 'react';
import logo from '~/Assets/Common/icons';
import navIcons from './icons'
import styles from './styles.module.css';


//this is where i left off, i will need to implement the open animation for the mobile menu and rememeber to put the oval as the background image
function MobileNavBar(){
    return(
        <>
            <nav className={styles.nav}>
                <img className={styles.nav_logo} src={logo['logo']}/>
                <img className={styles.nav_menu} src={navIcons['menu']}/>
            </nav>     
            <dialog className={styles.dialog} open={true}>
                <div className={styles.dialog_close}></div>
                <hr className={styles.dialog_line}/>
                <ul className={styles.dialog_links}>
                    <li className={styles.dialog_link}>
                        Pricing
                    </li>
                    <li className={styles.dialog_link}>
                        About
                    </li>
                    <li className={styles.dialog_link}>
                        Contact
                    </li>
                    <li className={styles.dialog_link}>
                        <button className={styles.dialog_demo}>
                            Schedule a Demo
                        </button>
                    </li>
                </ul>
            </dialog>   
        </>

    )
}

export default MobileNavBar;