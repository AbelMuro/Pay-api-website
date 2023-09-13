import React from 'react';
import styles from './styles.module.css';
import images from './images';

//working on responsiveness, finished tablet design for styles.about, now i need to work on mobile design
function AboutUs() {
    return(
        <>
            <section className={styles.about}>
                <h1 className={styles.about_title}>
                    We empower innovators
                    by delivering access to the financial system
                </h1>
                <h2 className={styles.about_second_title}>
                    Our Vision
                </h2>
                <p className={styles.about_desc}>
                    Our main goal is to build beautiful consumer experiences 
                    along with developer-friendly infrastructure. 
                    The result is an intelligent tool that gives everyone 
                    the ability to create amazing products that solve 
                    ig problems. We are deeply focused on democratizing 
                    financial services through technology. 
                </p>
                <h2 className={styles.about_second_title}>
                    Our Business
                </h2>
                <p className={styles.about_desc}>
                    At the core of our platform is the technical 
                    infrastructure APIs that connect consumers. 
                    Our innovative product provides key insights 
                    for businesses and individuals, as well as 
                    robust reporting for traditional financial 
                    institutions and developers. 
                </p>
            </section>  
            <img className={styles.team}/>       
            <div className={styles.team_info}>
                <section>
                    <hr/>
                    <h3 className={styles.team_title}>
                        Team Members
                    </h3>
                    <strong className={styles.team_data}>
                        300+
                    </strong>
                    <hr/>                    
                </section>
                <section>
                    <hr/>
                    <h3 className={styles.team_title}>
                        Offices in the US
                    </h3>
                    <strong className={styles.team_data}>
                        3
                    </strong>
                    <hr/>                    
                </section>
                <section>
                    <hr/>
                    <h3 className={styles.team_title}>
                        Transactions analyzed
                    </h3>
                    <strong className={styles.team_data}>
                        10M+
                    </strong>
                    <hr/>                    
                </section>
            </div>   
            <div className={styles.team_misc}>
                <h2 className={styles.team_misc_title}>
                    The Culture
                </h2>
                <p className={styles.team_misc_desc}>
                    We strongly believe there's always an opportunity 
                    to learn from each other outside of day-to-day work, 
                    whether it's company-wide offsites, internal hackathons, 
                    or co-worker meetups. We always value cross-team 
                    collaboration and diversity of thought, no matter 
                    the job title.
                </p>
                <h2 className={styles.team_misc_title}>
                    The People
                </h2>
                <p className={styles.team_misc_desc}>
                    We're all passionate about building a more 
                    efficient and inclusive financial infrastructure 
                    together. At PayAPI, we have diverse backgrounds 
                    and skills.
                </p>
            </div>
        </>
    )
}

export default AboutUs;