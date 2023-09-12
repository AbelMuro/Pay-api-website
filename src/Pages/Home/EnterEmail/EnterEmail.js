import React from 'react';
import EmailInput from '~/Components/EmailInput';
import styles from './styles.module.css';

function EnterEmail() {
    return(
        <section className={styles.enterEmail}>
            <h1>
                Ready to start?
            </h1>
            <EmailInput/>
        </section>
    )
}

export default EnterEmail;