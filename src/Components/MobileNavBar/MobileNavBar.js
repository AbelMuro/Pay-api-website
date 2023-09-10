import React, {useState, useEffect, useRef} from 'react';
import icons from '~/Assets/Common/icons';
import navIcons from './icons'
import styles from './styles.module.css';

function MobileNavBar(){
    const [open, setOpen] = useState(false);
    const dialogRef = useRef();

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
                <img className={styles.nav_logo} src={icons['logo']}/>
                <img className={styles.nav_menu} src={navIcons['menu']} onClick={handleMenu}/>
            </nav>     
            <dialog className={styles.dialog} open={open} ref={dialogRef}>
                <img src={icons['circle']} className={styles.dialog_circle}/>                     
                <div className={styles.dialog_close} onClick={handleMenu}></div>
                <hr className={styles.dialog_line}/>
                <ul className={styles.dialog_links}>
                    <li className={styles.dialog_link}>
                        Pricing
                    </li>
                    <li className={styles.dialog_link}>
                        About
                    </li>
                    <li className={styles.dialog_link}>
                        Contact
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