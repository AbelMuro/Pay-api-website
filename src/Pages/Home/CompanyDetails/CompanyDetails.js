import React from 'react';
import styles from './styles.module.css';
import logos from '~/Assets/Common/icons';


//this is where i left off, i will need to finish the html structure here and the styling
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
                            About us
                        </button>
                    </div>
                    <div className={styles.company_partners}>

                    </div>
            </section>
        </div>
    )
}

export default CompanyDetails;