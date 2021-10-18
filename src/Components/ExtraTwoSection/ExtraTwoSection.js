import React from 'react';
import Patient from '../Patient/Patient';
import Review from '../Review/Review';

const ExtraTwoSection = () => {
    return (
        <div className='d-flex flex-lg-row flex-sm-column'>
            <Patient></Patient>
            <Review></Review>
        </div>
    );
};

export default ExtraTwoSection;