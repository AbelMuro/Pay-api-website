import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';


function TextArea() {
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
        <fieldset className={styles.fieldset}>
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
        </fieldset>

    )
}

export default TextArea;