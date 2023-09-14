import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import CheckBox from './CheckBox';
import styles from './styles.module.css';
 
function Form() {

    const handleSubmit = () => {
        alert('Form has been submitted');
    }   

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <TextInput type={'text'} name={'name'} placeholder={'Name'}/>
            <TextInput type={'email'} name={'email'} placeholder={'Email Address'}/>
            <TextInput type={'text'} name={'company'} placeholder={'Company Name'}/>
            <TextInput type={'text'} name={'title'} placeholder={'Title'}/>
            <TextArea/>
            <CheckBox/>
            <input type='submit' className={styles.submit}/>
        </form>
    )
}

export default Form;