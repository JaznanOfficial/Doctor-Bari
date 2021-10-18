import React from 'react';
import quote1 from './quote 1.png'
import quote2 from './quote 2.png'

const Review = () => {
    return (
        <div className='m-5 px-3'>
            <h1 className='text-center text-danger mt-5'>Reviews</h1>
            <div className='my-5'>
                <img src={quote1} alt="" width='50px' />
                <p>Great medical office, wonderful and warm experience from start to finish. Appreciate <span className='text-danger fw-bolder'>Dr. Mohamed Nakeshbandi</span> taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.</p>
                <h3 className='text-primary'>-Andrew Myers</h3>
            <img src={quote2} alt="" width='50px'/>
            </div>
            <div className='my5'>
                <img src={quote1} alt="" width='50px' />
                <p>Wonderful experience with <span className='text-danger fw-bolder'>Doctor Bari</span>. and <span className='text-danger fw-bolder'>Dr.Asma Khapra</span> is incredible. Not only has she taken great care of my health, but also she is lovely to speak with at every appointment. It’s rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. I highly recommend becoming her patient!</p>
                <h3 className='text-primary'>-Melissa Hudges</h3>
            <img src={quote2} alt="" width='50px'/>
            </div>
        </div>
    );
};

export default Review;