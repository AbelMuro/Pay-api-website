import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';

function TextArea({variants}) {
    const [text, setText] = useState('');
    const textAreaRef = useRef();
    const emptyMessageRef = useRef();

    const handleChange = (e) => {
       e.target.setCustomValidity('');
       setText(e.target.value);
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();

        if(!isValid){
            textAreaRef.current.style.borderBottom = '1px solid rgba(255, 0, 0, 0.5)';
            textAreaRef.current.style.setProperty('--placeholder', 'rgba(255, 0, 0, 0.5)');
            emptyMessageRef.current.style.display = 'block';
        }
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        textAreaRef.current.style.borderBottom = '1px solid rgba(255, 0, 0, 0.5)';
        textAreaRef.current.style.setProperty('--placeholder', 'rgba(255, 0, 0, 0.5)');
        emptyMessageRef.current.style.display = 'block';
    }

    useEffect(() => {
        textAreaRef.current.style.borderBottom = '';
        textAreaRef.current.style.setProperty('--placeholder', 'rgba(54, 83, 107, 0.5)');
        emptyMessageRef.current.style.display = '';
    }, [text])


    return(
        <motion.fieldset className={styles.fieldset} variants={variants}>
            <textarea 
                name='message'
                value={text} 
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                className={styles.textarea} 
                placeholder={'Message'} 
                ref={textAreaRef}
                required>
            </textarea>    
            <div className={styles.errorMessage} ref={emptyMessageRef}>
                This field can't be empty
            </div>        
        </motion.fieldset>

    )
}

export default TextArea;