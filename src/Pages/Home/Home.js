import React from 'react';
import Header from './Header';
import CompanyDetails from './CompanyDetails';
import ApiDetails from './ApiDetails';
import ApiDesign from './ApiDesign';
import CompanyHighlights from './CompanyHighlights';
import EnterEmail from '~/Components/EnterEmail';

function Home(){

    return(
        <section>
            <Header/>
            <CompanyDetails/>
            <ApiDetails/>
            <ApiDesign/>
            <CompanyHighlights />
            <EnterEmail/>
        </section>
    )
}

export default Home;