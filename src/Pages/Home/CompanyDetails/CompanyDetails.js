import React from 'react';
import styles from './styles.module.css';
import logos from '~/Assets/Common/icons';


//this is where i left off, i will need to work on the responsiveness now AND the background circle too!
function CompanyDetails() {
    return(
        <div className={styles.company}>
            <section className={styles.company_content}>
                    <div className={styles.company_details}>
                        <h1>
                            Who we work with
                        </h1>
                        <p>
                            Today, millions of people around the world 
                            have successfully connected their accounts 
                            to apps they love using our API. We provide 
                            developers with the tools they need to create 
                            easy and accessible experiences for their users. 
                        </p>
                        <button>
                            About Us
                        </button>
                    </div>
                    <div className={styles.company_partners}>
                        <img className={styles.company_logo} src={logos['teslaLogo']}/>
                        <img className={styles.company_logo} src={logos['microsoftLogo']}/>
                        <img className={styles.company_logo} src={logos['hpLogo']}/>
                        <img className={styles.company_logo} src={logos['oracleLogo']}/>
                        <img className={styles.company_logo} src={logos['googleLogo']}/>
                        <img className={styles.company_logo} src={logos['nvidiaLogo']}/>
                    </div>
            </section>
        </div>
    )
}

export default CompanyDetails;