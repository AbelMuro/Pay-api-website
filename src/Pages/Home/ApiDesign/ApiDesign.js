import React from 'react';
import styles from './styles.module.css';
import images from './images';
import icons from '~/Assets/Common/icons';
import {motion} from 'framer-motion';

function ApiDesign() {

    const textVariants = {
        hidden: {
            x: -100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.7}
        }
    }

    const imageVariants = {
        hidden: {
            y: -200,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.7}
        }
    }

    const circleVariants = {
        hidden: {
            x: 200,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.5}
        }
    }

    return(
        <section className={styles.api}>
            <motion.img className={styles.circle} src={icons['circle']} initial='hidden' whileInView='show' variants={circleVariants} viewport={{once: true, amount: 0.6}}/>
            <motion.div className={styles.api_details} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.8}} transition={{staggerChildren: 0.4}}>
               <motion.h1 variants={textVariants}>
                    Simple UI & UX
               </motion.h1>
               <motion.p variants={textVariants}>
                    Our pre-built form is easy to 
                    integrate in your app or website’s checkout 
                    flow and designed to optimize conversion.  
               </motion.p>
            </motion.div>
            <motion.div className={styles.image_box} initial='hidden' whileInView='show' variants={imageVariants} viewport={{once: true, amount: 0.8}}>
                <img className={styles.api_design} src={images['twinPhones']}/>
            </motion.div>
        </section>
    )
}

export default ApiDesign;