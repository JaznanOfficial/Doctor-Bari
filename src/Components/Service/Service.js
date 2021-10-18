import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = (props) => {
    const { name, img, fee, details, specialist, experiences } = props.service;
    console.log(props);
    return (
        <div>
            <Col>
                <Card className="d-flex flex-sm-column flex-lg-row rounded-3 shadow">
                    <div className='img-div'>
                        <Card.Img variant="left" src={img} width='150px' height='175px' className='rounded m-1' />
                    </div>
                    <div className='w-75 d-grid justify-content-center align-items-center'>
                        <Card.Body>
                            <Card.Title>
                                {" "}
                                <h4 className='text-danger'>{name}</h4>{" "}
                            </Card.Title>
                            <Card.Text>
                                <h6 className='text-secondary'>{specialist}</h6>
                                <h5 className='text-primary'>Fees:{fee}</h5>
                                <Button variant="outline-dark" size="sm">See Details for Appoinment</Button>
                                
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
