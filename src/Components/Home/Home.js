import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
        </div>
    );
};

export default Home;