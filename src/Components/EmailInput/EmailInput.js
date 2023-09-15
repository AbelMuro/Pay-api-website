import React, {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion'
import styles from './styles.module.css';

function EmailInput({variants}){
    const [email, setEmail] = useState('');
    const emptyMessageRef = useRef();
    const invalidMessageRef = useRef();

    const handleEmail = (e) => {
        e.target.setCustomValidity('');
        setEmail(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch

        if(isEmpty)
            emptyMessageRef.current.style.display = 'block';
        else if(isInvalid)
            invalidMessageRef.current.style.display = 'block';
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        if(!email)
            emptyMessageRef.current.style.display = 'block';
        else 
            invalidMessageRef.current.style.display = 'block';
    }

    useEffect(() => {
        emptyMessageRef.current.style.display = '';
        invalidMessageRef.current.style.display = '';
    }, [email])

    return(                
        <motion.form className={styles.input_container} onInvalid={handleInvalid} variants={variants}>
            <input 
                type='email' 
                placeholder='Enter email address' 
                value={email} 
                onChange={handleEmail}
                onBlur={handleBlur}
                required/>
            <div className={styles.emptyMessage} ref={emptyMessageRef}>
                This field can't be empty.
            </div>   
            <div className={styles.emptyMessage} ref={invalidMessageRef}>
                Invalid email.
            </div>        
            <input type='submit'/>                
        </motion.form>
    )
}

export default EmailInput;