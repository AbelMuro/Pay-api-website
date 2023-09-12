import React from 'react';
import styles from './styles.module.css';
import icons from './icons';

function CompanyHighlights() {
    return(
        <div className={styles.company}>
            <section className={styles.company_highlight}>
                <img src={icons['personalIcon']}/>
                <h1> 
                    Personal Finances
                </h1>
                <p>
                    Consolidate financial data from multiple sources 
                    and categorize transactions up to 2 years of history. 
                    Analyze reports to reconcile activities in your account. 
                </p>
            </section>
            <section className={styles.company_highlight}>
                <img src={icons['bankIcon']}/>
                <h1> 
                    Banking & Coverage
                </h1>
                <p>
                    With our platform, you can speed up account onboarding and 
                    support ongoing payments for checking, savings, credit card, 
                    and brokerage accounts.
                </p>
            </section>
            <section className={styles.company_highlight}>
                <img src={icons['consumerIcon']}/>
                <h1> 
                    Consumer Payments
                </h1>
                <p>
                    It’s easier to set up secure bank payments with us 
                    through a flow designed with the user experience in mind. 
                    Customers could instantly authenticate their account.
                </p>
            </section>
        </div>
    )
}

export default CompanyHighlights;