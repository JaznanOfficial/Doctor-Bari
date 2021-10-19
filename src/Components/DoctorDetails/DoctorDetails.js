import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DoctorDetails.css'

const DoctorDetails = () => {
    const params = useParams();
    const { doctorId } = params;
    const { doctor, setDoctor} = useState([])
    useEffect(() => {
        fetch(`/services.json`)
            .then(res => res.json())
            .then(data => console.log(data[`${doctorId}`-1]));
    },[])
    return (
        <div className='doctor-details'>
        <Card>
        
        <Card.Body>
                    <Card.Title></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    );
};

export default DoctorDetails;