import React from 'react';
import styles from './styles.module.css';
import logos from '~/Assets/Common/icons';
import {motion} from 'framer-motion';

function CompanyDetails() {

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -200
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.7}
        }
    }

    const iconVariants = {
        hidden: {
            opacity: 0,
            y: -50
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5}
        }
    }

    return(
        <div className={styles.company}>
            <section className={styles.company_content}>
                    <motion.div className={styles.company_details} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.6}} transition={{staggerChildren: 0.4}}>
                        <motion.h1 variants={textVariants}>
                            Who we work with
                        </motion.h1>
                        <motion.p variants={textVariants}>
                            Today, millions of people around the world 
                            have successfully connected their accounts 
                            to apps they love using our API. We provide 
                            developers with the tools they need to create 
                            easy and accessible experiences for their users. 
                        </motion.p>
                        <motion.button variants={textVariants}>
                            About Us
                        </motion.button>
                    </motion.div>
                    <motion.div className={styles.company_partners} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.6}} transition={{staggerChildren: 0.4}}>
                        <motion.img className={styles.company_logo} variants={iconVariants} src={logos['teslaLogo']}/>
                        <motion.img className={styles.company_logo} variants={iconVariants} src={logos['microsoftLogo']}/>
                        <motion.img className={styles.company_logo} variants={iconVariants} src={logos['hpLogo']}/>
                        <motion.img className={styles.company_logo} variants={iconVariants} src={logos['oracleLogo']}/>
                        <motion.img className={styles.company_logo} variants={iconVariants} src={logos['googleLogo']}/>
                        <motion.img className={styles.company_logo} variants={iconVariants} src={logos['nvidiaLogo']}/>
                    </motion.div>
            </section>
        </div>
    )
}

export default CompanyDetails;