import React from 'react';
import EmailInput from '~/Components/EmailInput';
import styles from './styles.module.css';
import icons from '~/Assets/Common/icons';
import images from './images';
import {motion} from 'framer-motion';

function Header(){

    const textVariants = {
        hidden: {
            x: -200
        },
        show: {
            x: 0,
            transition: {duration: 0.8}
        }
    }

    const circleVariants = {
        hidden: {
            x: 300,
        },
        show: {
            x: 0,
            transition: {duration: 1.1}
        }
    }


    return(
        <motion.header className={styles.header} initial='hidden' whileInView='show' viewport={{once: true}} transition={{staggerChildren: 0.6}}>
            <motion.img className={styles.circle} src={icons['circle']} variants={circleVariants}/>
            <section className={styles.header_intro}>
                <motion.h1 className={styles.intro_title} variants={textVariants}>
                    Start building with our APIs for absolutely free.
                </motion.h1>
                <EmailInput variants={textVariants}/>
                <motion.h2 className={styles.intro_questions} variants={textVariants}>
                    Have any questions? <a>Contact Us</a>
                </motion.h2>
            </section>
            <motion.div className={styles.header_phone} initial={{y: -300}} whileInView={{y: 0}} viewport={{once: true}} transition={{duration: 1.7}}>
                <img src={images['phoneImage']}/>
            </motion.div>
        </motion.header>
    )
}

export default Header;