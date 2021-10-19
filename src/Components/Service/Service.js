import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DoctorDetails from "../DoctorDetails/DoctorDetails";

const Service = (props) => {
    const { name, img, fee, details, specialist, experiences, id } = props.service;
    
    return (
        <div>
            <Col>
                <Card className="d-flex flex-sm-column flex-lg-row rounded-3 shadow justify-content-center align-items-center">
                    <div className='img-div'>
                        <Card.Img variant="left" src={img} width='150px' height='175px' className='rounded m-1' />
                    </div>
                    <div className='w-75 d-grid justify-content-center align-items-center'>
                        <Card.Body>
                            <Card.Title>
                                {" "}
                                <h4 className='text-dark'>{name}</h4>{" "}
                            </Card.Title>
                            <Card.Body>
                                <h6 className='text-secondary'>{specialist}</h6>
                                <h5 className='text-danger'>Fees:{fee}</h5>
                                <Link to={`/service/${id}`}>
                                <Button variant="outline-dark" size="sm">Details for Appoinment</Button>
                                </Link>
                                
                            </Card.Body>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
