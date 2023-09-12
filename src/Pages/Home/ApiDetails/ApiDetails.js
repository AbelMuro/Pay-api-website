import React from 'react';
import styles from './styles.module.css';
import images from './images';

function ApiDetails() {
    return(
        <section className={styles.api}>
            <div className={styles.image_box}>
                <img className={styles.api_code} src={images['codeIllustration']}/>
            </div>
            <div className={styles.api_details}>
                <h1>
                    Easy to implement
                </h1>
                <p>
                    Our API comes with just a few lines of code. 
                    You’ll be up and running in no time. 
                    We built our documentation page to 
                    integrate payments functionality with ease.
                </p>
            </div>
        </section>
    )
}

export default ApiDetails;