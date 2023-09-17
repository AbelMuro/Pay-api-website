import React from 'react';
import Form from './Form';
import EnterEmail from '~/Components/EnterEmail';
import styles from './styles.module.css';
import icons from './icons';
import {motion} from 'framer-motion';

function ContactUs() {

    const titleVariants = {
        hidden: {
            x: -150,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.7}
        }
    }

    const iconsVariants = {
        hidden: {
            y: -150,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    }

    return(
        <>
            <section className={styles.contact}>
                <motion.h1 className={styles.contact_title} initial='hidden' whileInView='show' variants={titleVariants} viewport={{once: true, amount: 0.3}}>
                    Submit a help request and 
                    we’ll get in touch shortly.
                </motion.h1>
                <Form/>
                <motion.div className={styles.contact_partners} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.7}} transition={{staggerChildren: 0.4}}>
                    <motion.h2 className={styles.partners_title} variants={iconsVariants}>
                        Join the thousands of innovators that are already building with us
                    </motion.h2>
                    <motion.img className={styles.partners_icon} src={icons['tesla']} variants={iconsVariants}/>
                    <motion.img className={styles.partners_icon} src={icons['microsoft']} variants={iconsVariants}/>
                    <motion.img className={styles.partners_icon} src={icons['hp']} variants={iconsVariants}/>
                    <motion.img className={styles.partners_icon} src={icons['oracle']} variants={iconsVariants}/>
                    <motion.img className={styles.partners_icon} src={icons['google']} variants={iconsVariants}/>
                    <motion.img className={styles.partners_icon} src={icons['nvidia']} variants={iconsVariants}/>
                </motion.div>
            </section>  
            <EnterEmail/>      
        </>

    )
}

export default ContactUs;