import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Patient = () => {
    return (
        <div className='m-5 px-3'>
            <h1 className='text-center text-danger mt-5'>Our Recovered Patients</h1>
            <Row xs={1} md={2} className="g-4 my-1">
  
    <Col>
      <Card className='shadow rounded-circle'>
        <Card.Img variant="top" src="https://www.uchealth.org/today/wp-content/uploads/sites/6/2020/04/Recovered-COVID-19-Patient-UCHealth-tiny-e1586996847939.jpg" className='rounded-circle shadow' width='200px' height='200px' />
        
      </Card>
    </Col>
    <Col>
      <Card className='shadow rounded-circle'>
        <Card.Img variant="top" src="https://e3.365dm.com/20/04/2048x1152/skynews-covid-19-coronavirus_4966680.jpg" className='rounded-circle shadow' width='200px' height='200px'/>
        
      </Card>
    </Col>
    <Col>
      <Card className='shadow rounded-circle'>
        <Card.Img variant="top" src="https://images.news18.com/ibnlive/uploads/2021/05/1620187236_covid-recovery.jpg" className='rounded-circle shadow' width='200px' height='200px'/>
        
      </Card>
    </Col>
    <Col>
      <Card className='shadow rounded-circle'>
        <Card.Img variant="top" src="https://s.w-x.co/util/image/w/in-recovered_patient_covid.jpg?v=at&w=1280&h=720" className='rounded-circle shadow' width='200px' height='200px'/>
        
      </Card>
    </Col>
  
</Row>
        </div>
    );
};

export default Patient;