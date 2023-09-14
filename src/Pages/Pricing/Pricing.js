import React from 'react';
import styles from './styles.module.css';
import planData from './PlanData';
import EnterEmail from '~/Components/EnterEmail';
import icons from '~/Assets/Common/icons';
import useMediaQuery from '~/Assets/Hooks/useMediaQuery.js';

function Pricing(){
    const mobile = useMediaQuery('(max-width: 610px)');
    const planDetails = ["Transactions", "Auth", "Identity", "Investments", "Assets", "Liabilities", "Income"];

    return(
        <>
            <section className={styles.pricing}>
                <img className={styles.circle} src={icons['circle']}/>
                <h1 className={styles.pricing_title}>
                    Pricing
                </h1>
                {
                    planData.map((plan, i) => {
                        const currentPlanDetails = plan['plan details'];
                        return(
                            <div className={styles.pricing_plan} key={i}>
                                <h2>
                                    {plan.plan}
                                </h2>
                                <p>
                                    {plan.desc}
                                </p>
                                <strong>
                                    {plan.price}
                                </strong>
                                <hr/>
                                <ul className={styles.plan_details}>
                                    {planDetails.map((detail, i) => {
                                        const planIncluded = currentPlanDetails.includes(detail);
                                        return(
                                            <li className={planIncluded ? styles.included : styles.excluded} key={i}>
                                                {detail}
                                            </li>
                                        )
                                    })}                                                       
                                </ul>
                                <hr/>
                                <button className={styles.plan_request}>
                                    Request Access
                                </button>
                            </div>
                        )
                    })
                }
            </section>    
            <EnterEmail/>    
        </>
 
    )
}

export default Pricing;