import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DoctorDetails.css'

const DoctorDetails = () => {
    const params = useParams();
    const { doctorId } = params;
    const [ doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch(`/services.json`)
            .then(res => res.json())
            .then(data => setDoctor(data[`${doctorId}`-1]));
    }, [])
    const { name, img, details, specialist,fee } = doctor;
    return (
        <div className='doctor-details w-100 mx-auto mb-5'>
        <Card style={{ width: '18rem' }} className='mx-auto'>
        <Card.Img variant="top" src={img} width='200px' height='' className='mx-auto'/>
        <Card.Body>
                    <Card.Title> <h3 className='text-danger'>{name}</h3> </Card.Title>
                    <h5 className='text-success'>{specialist}</h5>
                    
          <Card.Text>
            {details}
                    </Card.Text>
                    <h3 className='text-danger'>{fee}</h3>
                    <Link to ='/private-doctor'><Button variant="outline-danger">Get Appoinment</Button></Link>
        </Card.Body>
      </Card>
        </div>
    );
};

export default DoctorDetails;