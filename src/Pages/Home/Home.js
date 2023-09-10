import React from 'react';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import styles from './styles.module.css';

function Home(){
    return(
        <section>
            <Header/>
            <CompanyDetails/>
        </section>
    )
}

export default Home;