import React from 'react';
import styles from './styles.module.css';
import images from './images';
import icons from '~/Assets/Common/icons';

function ApiDesign() {


    return(
        <section className={styles.api}>
            <img className={styles.circle} src={icons['circle']}/>
            <div className={styles.api_details}>
               <h1>
                    Simple UI & UX
               </h1>
               <p>
                    Our pre-built form is easy to 
                    integrate in your app or website’s checkout 
                    flow and designed to optimize conversion.  
               </p>
            </div>
            <div className={styles.image_box}>
                <img className={styles.api_design} src={images['twinPhones']}/>
            </div>
        </section>
    )
}

export default ApiDesign;