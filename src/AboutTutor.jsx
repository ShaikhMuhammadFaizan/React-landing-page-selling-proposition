import React, { Component } from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';

import Tutor1 from './Assets/tutor2.jpg'

import './AboutTutor.css';

class Abouttutor extends Component {
    render() {
        return (
            <Row className="about-tutor-area color-white-text d-flex justify-content-between align-items-center">
                <Col>
                    <Image className="tutor-img" src={Tutor1} roundedCircle />
                </Col>
                <Col className="about-tutor-text-area">
                    <p className="heading-text">About the <span className="interest-text">tutor</span></p>
                    <p className="supporting-desc-text color-lg-white-text tutor-desc-text-margin">Add a description of your offer and key benefits. What it is and how it helps your customers.
                    How will this help solve the customer's issue in the future.
                        How will your product change your customer's life. Add a description of your and key benefits</p>
                </Col>
            </Row>
        );
    }
}

export default Abouttutor;
