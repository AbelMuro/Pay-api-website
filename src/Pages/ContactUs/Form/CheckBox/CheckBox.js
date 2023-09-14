import React, {useState} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function CheckBox() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    }
    
    return(
        <section className={styles.check}>
            <label className={styles.check_box} htmlFor={'checkbox'}>
                <input type='checkbox' id='checkbox' value={checked} onChange={handleChange}/>
                {checked && <img className={styles.check_mark} src={icons['checkmark']}/>}
            </label>
            <h1 className={styles.check_desc}>
                Stay up-to-date with company announcements and updates to our API
            </h1>
        </section>
    )
}

export default CheckBox;