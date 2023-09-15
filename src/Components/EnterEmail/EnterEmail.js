import React from 'react';
import EmailInput from '~/Components/EmailInput';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function EnterEmail() {

    const titleVariants = {
        hidden: {
            x: -150,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.6}
        }
    }

    const emailVariants = {
        hidden: {
            x: 150,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.8}
        }
    }

    return(
        <motion.section className={styles.enterEmail} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.6}} transition={{staggerChildren: 0.4}}>
            <motion.h1 variants={titleVariants}>
                Ready to start?
            </motion.h1>
            <EmailInput variants={emailVariants}/>
        </motion.section>
    )
}

export default EnterEmail;