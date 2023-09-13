import React, {useState, useEffect, useRef} from 'react';
import icons from '~/Assets/Common/icons';
import navIcons from './icons'
import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';

function MobileNavBar(){
    const [open, setOpen] = useState(false);
    const dialogRef = useRef();
    const navigate = useNavigate();

    const handleLink = (e) => {
        const link = e.target.getAttribute('data-link');
        navigate(link);
        setOpen(false);
    }

    const handleMenu = () => {
        setOpen(!open);
    }

    useEffect(() => {
        if(open){
            setTimeout(() => {
                if(!dialogRef.current) return;
                dialogRef.current.style.clipPath = 'circle(100vh at 40px 40px)';
            }, 10)
        }
        else{
            setTimeout(() => {
                if(!dialogRef.current) return;
                dialogRef.current.style.clipPath = '';
            }, 10)
        }
    }, [open])

    return(
        <>
            <nav className={styles.nav}>
                <img className={styles.nav_logo} src={icons['logo']} onClick={handleLink} data-link='/'/>
                <img className={styles.nav_menu} src={navIcons['menu']} onClick={handleMenu}/>
            </nav>     
            <dialog className={styles.dialog} open={open} ref={dialogRef}>
                <img src={icons['circle']} className={styles.dialog_circle}/>                     
                <div className={styles.dialog_close} onClick={handleMenu}></div>
                <hr className={styles.dialog_line}/>
                <ul className={styles.dialog_links}>
                    <li className={styles.dialog_link} onClick={handleLink} data-link='/pricing'>
                        <a>Pricing</a>
                    </li>
                    <li className={styles.dialog_link} onClick={handleLink} data-link='/about'>
                        <a>About</a>
                    </li>
                    <li className={styles.dialog_link} onClick={handleLink} data-link='/contact'>
                        <a>Contact</a>
                    </li>
                    <li className={styles.dialog_link}>
                        <button className={styles.dialog_demo}>
                            Schedule a Demo
                        </button>
                    </li>
                </ul>
            </dialog>   
        </>

    )
}

export default MobileNavBar;