import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Patient from '../Patient/Patient';
import Review from '../Review/Review';

const ExtraTwoSection = () => {
    return (
        <div>
        <Row xs={1} md={2} className="g-0">
            <Col><Patient></Patient></Col>
            <Col><Review></Review></Col>
            </Row>
        </div>
    );
};

export default ExtraTwoSection;