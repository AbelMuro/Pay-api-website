import React from 'react';
import EmailInput from '~/Components/EmailInput';
import styles from './styles.module.css';
import icons from '~/Assets/Common/icons';
import images from './images';
import {motion} from 'framer-motion';

function Header(){

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -200
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.8}
        }
    }

    const circleVariants = {
        hidden: {
            opacity: 0,
            x: 300,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {duration: 1.1}
        }
    }


    return(
        <motion.header className={styles.header} initial='hidden' animate='show' transition={{staggerChildren: 0.6}}>
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
            <motion.div className={styles.header_phone} initial={{opacity: 0,y: -300,}} animate={{opacity: 1, y: 0,}} transition={{duration: 1.4}}>
                <img src={images['phoneImage']}/>
            </motion.div>
        </motion.header>
    )
}

export default Header;