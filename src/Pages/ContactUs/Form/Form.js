import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import CheckBox from './CheckBox';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
 
function Form() {

    const inputVariants = {
        hidden: {
            x: -150,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
        }
    }

    const handleSubmit = () => {
        alert('Form has been submitted');
    }   

    return(
        <motion.form 
            className={styles.form} 
            onSubmit={handleSubmit} 
            initial='hidden' 
            whileInView='show' 
            viewport={{once: true, amount: 0.6}} 
            transition={{staggerChildren: 0.3}}>
                <TextInput type={'text'} name={'name'} placeholder={'Name'} variants={inputVariants}/>
                <TextInput type={'email'} name={'email'} placeholder={'Email Address'} variants={inputVariants}/>
                <TextInput type={'text'} name={'company'} placeholder={'Company Name'} variants={inputVariants}/>
                <TextInput type={'text'} name={'title'} placeholder={'Title'} variants={inputVariants}/>
                <TextArea variants={inputVariants}/>
                <CheckBox variants={inputVariants}/>
                <motion.input type='submit' className={styles.submit} variants={inputVariants}/>
        </motion.form>
    )
}

export default Form;