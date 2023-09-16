import React, {useState} from 'react';
import styles from './styles.module.css';
import icons from './icons';
import { motion } from 'framer-motion';

function CheckBox({variants}) {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }
    
    return(
        <section className={styles.check}>
            <motion.label className={styles.check_box} htmlFor={'checkbox'} variants={variants}>
                <input type='checkbox' id='checkbox' value={checked} onChange={handleChange}/>
                {checked && <img className={styles.check_mark} src={icons['checkmark']}/>}
            </motion.label>
            <motion.h1 className={styles.check_desc} variants={variants}>
                Stay up-to-date with company announcements and updates to our API
            </motion.h1>
        </section>
    )
}

export default CheckBox;