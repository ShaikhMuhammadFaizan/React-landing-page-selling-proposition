import React, { Component } from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';

import LogoHere from './Assets/logoHere2.png'


import './TrustUsArea.css';

class TrustUsArea extends Component {
    render() {
        return (
            <Container className="color-white-text trust-us-area">
                <Col>
                    <p className="heading-text">They <span className="interest-text">trusted us</span></p>
                </Col>
                <Col className="logos-area d-flex justify-content-between align-items-center">
                    <Image className="logo-img" src={LogoHere} roundedCircle />
                    <Image className="logo-img" src={LogoHere} roundedCircle />
                    <Image className="logo-img" src={LogoHere} roundedCircle />
                    <Image className="logo-img" src={LogoHere} roundedCircle />
                </Col>
            </Container>
        );
    }
}

export default TrustUsArea;
