import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Patient from '../Patient/Patient';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
            <Patient></Patient>
            <Footer></Footer>
        </div>
    );
};

export default Home;