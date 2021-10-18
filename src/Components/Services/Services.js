import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <div className='services mx-auto my-5'>
            <div className='my-3'>
            <h2 className='text-danger'>Our Valuable Doctors</h2>
            <h4 className='text-secondary'>(They always ready to provide best services)</h4>
            </div>
        <Row xs={1} md={3} className="g-4">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </Row>
        </div>
    );
};

export default Services;