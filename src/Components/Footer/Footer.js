import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "./doctor-bari.jpg";

const Footer = () => {
    return (
        <div className="w-100 bg-dark d-flex flex-row text-light">
            <Row xs={1} md={2} className="g-4 justify-content-center align-items-center mx-lg-auto">
                <Col className='mx-0 px-0'>
                    <img src={img} alt="img not found" width="150px" />
                </Col>
                <Col>
                    <div className="d-flex flex-column align-items-center justify-content-center mx-auto w-75">
                        <h3>Doctor Bari</h3>
                        <h5>© 2016, All Rights Reserved in the hand of 'DOCTOR BARI' Ltd.</h5>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
