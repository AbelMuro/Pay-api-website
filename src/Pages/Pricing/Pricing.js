import React from 'react';
import styles from './styles.module.css';
import planData from './PlanData';
import EnterEmail from '~/Components/EnterEmail';
import {motion} from 'framer-motion';

function Pricing(){
    const planDetails = ["Transactions", "Auth", "Identity", "Investments", "Assets", "Liabilities", "Income"];

    const variants = {
        hidden: {
            x: -150,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.8}
        }
    }

    const lineVariants = {
        hidden: {
            x: -150,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 0.25,
            transition: {duration: 0.8}
        }
    }

    const includedVariants = {
        hidden: {
            x: -150,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.8}
        }
    }

    const excludedVariants = {
        hidden: {
            x: -150,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 0.5,
            transition: {duration: 0.8}
        }
    }



    return(
        <>
            <section className={styles.pricing}>
                <motion.h1 className={styles.pricing_title} initial='hidden' whileInView='show' variants={variants} viewport={{once: true}}>
                    Pricing
                </motion.h1>
                {
                    planData.map((plan, i) => {
                        const currentPlanDetails = plan['plan details'];
                        return(
                            <motion.div className={styles.pricing_plan} key={i} initial='hidden' whileInView='show' transition={{staggerChildren: 0.2}} viewport={{once: true}}>
                                <motion.h2 variants={variants}>
                                    {plan.plan}
                                </motion.h2>
                                <motion.p variants={variants}>
                                    {plan.desc}
                                </motion.p>
                                <motion.strong variants={variants}>
                                    {plan.price}
                                </motion.strong>
                                <motion.hr variants={lineVariants}/>
                                <ul className={styles.plan_details}>
                                    {planDetails.map((detail, i) => {
                                        const planIncluded = currentPlanDetails.includes(detail);
                                        return(
                                            <motion.li className={planIncluded ? styles.included : styles.excluded} key={i} variants={planIncluded ? includedVariants : excludedVariants}>
                                                {detail}
                                            </motion.li>
                                        )
                                    })}                                                       
                                </ul>
                                <motion.hr variants={lineVariants}/>
                                <motion.button className={styles.plan_request} variants={variants}>
                                    Request Access
                                </motion.button>
                            </motion.div>
                        )
                    })
                }
            </section>    
            <EnterEmail/>    
        </>
 
    )
}

export default Pricing;