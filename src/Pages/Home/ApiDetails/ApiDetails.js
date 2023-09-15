import React from 'react';
import styles from './styles.module.css';
import images from './images';
import {motion} from 'framer-motion';

function ApiDetails() {

    const imageVariants = {
        hidden: {
            scale: 0,
        },
        show: {
            scale: 1,
            transition: {duration: 0.8}
        }
    }


    const textVariants = {
        hidden: {
            x: 200,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.6}
        }
    }

    return(
        <section className={styles.api}>
            <motion.div className={styles.image_box} variants={imageVariants} initial='hidden' whileInView='show' viewport={{once: true, amount: 1, margin: '-100px'}}>
                <img className={styles.api_code} src={images['codeIllustration']}/>
            </motion.div>
            <motion.div className={styles.api_details} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.9}} transition={{staggerChildren: 0.6}}>
                <motion.h1 variants={textVariants}>
                    Easy to implement
                </motion.h1>
                <motion.p variants={textVariants}>
                    Our API comes with just a few lines of code. 
                    You’ll be up and running in no time. 
                    We built our documentation page to 
                    integrate payments functionality with ease.
                </motion.p>
            </motion.div>
        </section>
    )
}

export default ApiDetails;