import React from 'react';
import styles from './styles.module.css';
import EnterEmail from '~/Components/EnterEmail';
import icons from '~/Assets/Common/icons';
import {motion} from 'framer-motion';


//i want to do some refactoring on the last element of this component
function AboutUs() {

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -150
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.7}
        }
    }

    const imageVariants = {
        hidden: {
            scaleY: 0
        },
        show: {
            scaleY: 1,
            transition: {duration: 0.7}
        }
    }

    const circleVariants = {
        hidden: {
            x: -250
        },
        show: {
            x: 0,
            transition: {duration: 1.12}
        }
    }

    const teamContainerVariants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        }
    }

    const teamDetailVariants = {
        hidden: {
            x: -250,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.7}
        }
    }

    return(
        <>
            <motion.section className={styles.about} initial='hidden' whileInView='show' viewport={{once: true}} transition={{staggerChildren: 0.4}}>
                <motion.h1 className={styles.about_title} variants={textVariants}>
                    We empower innovators
                    by delivering access to the financial system
                </motion.h1>
                <motion.h2 className={styles.about_second_title} variants={textVariants}>
                    Our Vision
                </motion.h2>
                <motion.p className={styles.about_desc} variants={textVariants}>
                    Our main goal is to build beautiful consumer experiences 
                    along with developer-friendly infrastructure. 
                    The result is an intelligent tool that gives everyone 
                    the ability to create amazing products that solve 
                    ig problems. We are deeply focused on democratizing 
                    financial services through technology. 
                </motion.p>
                <motion.h2 className={styles.about_second_title} variants={textVariants}>
                    Our Business
                </motion.h2>
                <motion.p className={styles.about_desc} variants={textVariants}>
                    At the core of our platform is the technical 
                    infrastructure APIs that connect consumers. 
                    Our innovative product provides key insights 
                    for businesses and individuals, as well as 
                    robust reporting for traditional financial 
                    institutions and developers. 
                </motion.p>
            </motion.section>  
            <motion.div className={styles.image_box} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.5}} transition={{staggerChildren: 0.7}}>
                <motion.img className={styles.team} variants={imageVariants}/>  
                <motion.img className={styles.circle_background_two} src={icons['circle']} variants={circleVariants}/>                
            </motion.div>

            <div className={styles.team_info}>
                <motion.section initial='hidden' whileInView='show' variants={teamContainerVariants} viewport={{once: true, amount: 0.8}} transition={{duration: 0.9, staggerChildren: 0.7}}>
                    <motion.h3 className={styles.team_title} variants={teamDetailVariants}>
                        Team Members
                    </motion.h3>
                    <motion.strong className={styles.team_data} variants={teamDetailVariants}>
                        300+
                    </motion.strong>                
                </motion.section>
                <motion.section initial='hidden' whileInView='show' variants={teamContainerVariants}viewport={{once: true, amount: 0.8}} transition={{duration: 0.6, staggerChildren: 0.4}}>
                    <motion.h3 className={styles.team_title} variants={teamDetailVariants}>
                        Offices in the US
                    </motion.h3>
                    <motion.strong className={styles.team_data} variants={teamDetailVariants}>
                        3
                    </motion.strong>                 
                </motion.section>
                <motion.section initial='hidden' whileInView='show' variants={teamContainerVariants} viewport={{once: true, amount: 0.8}} transition={{duration: 0.8, staggerChildren: 0.6}}>
                    <motion.h3 className={styles.team_title} variants={teamDetailVariants}>
                        Transactions analyzed
                    </motion.h3>
                    <motion.strong className={styles.team_data} variants={teamDetailVariants}>
                        10M+
                    </motion.strong>               
                </motion.section>
            </div>   
            <motion.div className={styles.team_misc} initial='hidden' whileInView='show' viewport={{once: true, amount: 0.6}} transition={{staggerChildren: 0.4}}>
                <motion.h2 className={styles.team_misc_title} variants={textVariants}>
                    The Culture
                </motion.h2>
                <motion.p className={styles.team_misc_desc} variants={textVariants}>
                    We strongly believe there's always an opportunity 
                    to learn from each other outside of day-to-day work, 
                    whether it's company-wide offsites, internal hackathons, 
                    or co-worker meetups. We always value cross-team 
                    collaboration and diversity of thought, no matter 
                    the job title.
                </motion.p>
                <motion.h2 className={styles.team_misc_title} variants={textVariants}>
                    The People
                </motion.h2>
                <motion.p className={styles.team_misc_desc} variants={textVariants}>
                    We're all passionate about building a more 
                    efficient and inclusive financial infrastructure 
                    together. At PayAPI, we have diverse backgrounds 
                    and skills.
                </motion.p>
            </motion.div>
            <EnterEmail/>
        </>
    )
}

export default AboutUs;