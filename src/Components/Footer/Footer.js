import React from 'react';
import img from './doctor-bari.jpg'

const Footer = () => {
    return (
        <div className='w-100 bg-dark d-flex flex-row text-light'>
            <img src={img} alt="img not found" width='200px' />
            <div className='d-flex flex-column align-items-center justify-content-center mx-auto'>
            <h3>Doctor Bari</h3>
            <h5>© 2016, All Rights Reserved in the hand of 'DOCTOR BARI' Ltd.</h5>
            </div>
        </div>
    );
};

export default Footer;