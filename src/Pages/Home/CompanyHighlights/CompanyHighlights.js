import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import {motion} from 'framer-motion';

function CompanyHighlights() {

    const variants = {
        hidden: {
            x: -200,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    }


    return(
        <div className={styles.company} >
            <motion.section className={styles.company_highlight} initial='hidden' whileInView='show' transition={{staggerChildren: 0.2}} viewport={{once: true, amount: 0.8}}>
                <motion.img src={icons['personalIcon']} variants={variants}/>
                <motion.h1 variants={variants}> 
                    Personal Finances
                </motion.h1>
                <motion.p variants={variants}>
                    Consolidate financial data from multiple sources 
                    and categorize transactions up to 2 years of history. 
                    Analyze reports to reconcile activities in your account. 
                </motion.p>
            </motion.section>
            <motion.section className={styles.company_highlight} initial='hidden' whileInView='show' transition={{staggerChildren: 0.2}} viewport={{once: true, amount: 0.8}}>
                <motion.img src={icons['bankIcon']} variants={variants}/>
                <motion.h1 variants={variants}> 
                    Banking & Coverage
                </motion.h1>
                <motion.p variants={variants}>
                    With our platform, you can speed up account onboarding and 
                    support ongoing payments for checking, savings, credit card, 
                    and brokerage accounts.
                </motion.p>
            </motion.section>
            <motion.section className={styles.company_highlight} initial='hidden' whileInView='show' transition={{staggerChildren: 0.2}} viewport={{once: true, amount: 0.8}}>
                <motion.img src={icons['consumerIcon']} variants={variants}/>
                <motion.h1 variants={variants}> 
                    Consumer Payments
                </motion.h1>
                <motion.p variants={variants}>
                    It’s easier to set up secure bank payments with us 
                    through a flow designed with the user experience in mind. 
                    Customers could instantly authenticate their account.
                </motion.p>
            </motion.section>
        </div>
    )
}

export default CompanyHighlights;