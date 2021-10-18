import React from 'react';
import ExtraTwoSection from '../ExtraTwoSection/ExtraTwoSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExtraTwoSection></ExtraTwoSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;