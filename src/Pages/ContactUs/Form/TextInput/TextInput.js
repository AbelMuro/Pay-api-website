import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function TextInput({type, name, placeholder, variants}) {
    const [text, setText] = useState('');
    const inputRef = useRef();
    const emptyMessageRef = useRef();
    const invalidMessageRef = useRef();

    const handleChange = (e) => {
        e.target.setCustomValidity('');
        setText(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch;

        if(isEmpty){
            inputRef.current.style.borderBottom = '1px solid rgba(255, 0, 0, 0.5)';
            inputRef.current.style.setProperty('--placeholder', 'rgba(255, 0, 0, 0.5)');
            emptyMessageRef.current.style.display = 'block';
        }
        else if(isInvalid){
            inputRef.current.style.borderBottom = '1px solid rgba(255, 0, 0, 0.5)';
            inputRef.current.style.setProperty('--placeholder', 'rgba(255, 0, 0, 0.5)');
            inputRef.current.style.color = 'rgba(255, 0, 0, 0.5)'
            invalidMessageRef.current.style.display = 'block';
        }
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        inputRef.current.style.borderBottom = '1px solid rgba(255, 0, 0, 0.5)';
        inputRef.current.style.setProperty('--placeholder', 'rgba(255, 0, 0, 0.5)');

        if(isEmpty)
            emptyMessageRef.current.style.display = 'block';
        else {
            invalidMessageRef.current.style.display = 'block';
            inputRef.current.style.color = 'rgba(255, 0, 0, 0.5)';
        }   
    }

    useEffect(() => {
        inputRef.current.style.borderBottom = ''
        emptyMessageRef.current.style.display = '';
        invalidMessageRef.current.style.display = '';
        inputRef.current.style.color = '';
        inputRef.current.style.setProperty('--placeholder', 'rgba(54, 83, 107, 0.5)');
    }, [text])

    return(
        <motion.fieldset className={styles.container} variants={variants}>
            <input 
                name={name}
                className={styles.input} 
                placeholder={placeholder}
                type={type}
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                ref={inputRef}
                required/>
            <div className={styles.errorMessage} ref={emptyMessageRef}>
                This field can't be empty
            </div>
            <div className={styles.errorMessage} ref={invalidMessageRef}>
                Invalid Email
            </div>
        </motion.fieldset>
    )
}

export default TextInput;