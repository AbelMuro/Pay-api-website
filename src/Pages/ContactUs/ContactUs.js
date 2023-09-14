import React from 'react';
import Form from './Form';
import EnterEmail from '~/Components/EnterEmail';
import styles from './styles.module.css';
import icons from './icons';

function ContactUs() {
    return(
        <>
            <section className={styles.contact}>
                <h1 className={styles.contact_title}>
                    Submit a help request and 
                    we’ll get in touch shortly.
                </h1>
                <Form/>
                <div className={styles.contact_partners}>
                    <h2 className={styles.partners_title}>
                        Join the thousands of innovators that are already building with us
                    </h2>
                    <img className={styles.partners_icon} src={icons['tesla']}/>
                    <img className={styles.partners_icon} src={icons['microsoft']}/>
                    <img className={styles.partners_icon} src={icons['hp']}/>
                    <img className={styles.partners_icon} src={icons['oracle']}/>
                    <img className={styles.partners_icon} src={icons['google']}/>
                    <img className={styles.partners_icon} src={icons['nvidia']}/>
                </div>
            </section>  
            <EnterEmail/>      
        </>

    )
}

export default ContactUs;