import React from 'react';
import EmailInput from '~/Components/EmailInput';
import styles from './styles.module.css';
import icons from '~/Assets/Common/icons';
import images from './images';

function Header(){

    return(
        <header className={styles.header}>
            <img className={styles.circle} src={icons['circle']}/>
            <section className={styles.header_intro}>
                <h1 className={styles.intro_title}>
                    Start building with our APIs for absolutely free.
                </h1>
                <EmailInput/>
                <h2 className={styles.intro_questions}>
                    Have any questions? <a>Contact Us</a>
                </h2>
            </section>
            <div className={styles.header_phone}>
                <img src={images['phoneImage']}/>
            </div>
        </header>
    )
}

export default Header;