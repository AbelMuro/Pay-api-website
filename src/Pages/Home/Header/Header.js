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
        <motion.header className={[styles.header, 'items-center'].join(' ')} initial='hidden' whileInView='show' viewport={{once: true}} transition={{staggerChildren: 0.6}}>
            <motion.img className={styles.circle} src={icons['circle']} variants={circleVariants} items-center/>
            <section className={styles.header_intro}>
                <motion.h1 className={styles.intro_title} variants={textVariants} items-center>
                    Start building with our APIs for absolutely free.
                </motion.h1>
                <EmailInput variants={textVariants}/>
                <motion.h2 className={styles.intro_questions} variants={textVariants} items-center>
                    Have any questions? <a>Contact Us</a>
                </motion.h2>
            </section>
            <motion.div className={[styles.header_phone, 'items-center'].join(' ')} initial={{opacity: 0,y: -300}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1.7}} items-center>
                <img src={images['phoneImage']}/>
            </motion.div>
        </motion.header>
    )
}

export default Header;