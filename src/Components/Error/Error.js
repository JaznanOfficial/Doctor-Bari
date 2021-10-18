import React from 'react';
import NotFound from './Error.jpg'
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <img src={NotFound} alt="" />
        </div>
    );
};

export default Error;