import React, { Component } from 'react';
import { Container, Col, Image, Row, Form, Button } from 'react-bootstrap';

import './UniqueSelling.css';

class UniqueSelling extends Component {
    render() {
        return (
            <Container className="unique-selling-area color-white-text d-flex justify-content-around align-items-center ">
                <div>
                    <p className="thin-big-text">YOUR UNIQUE <span className="big-heading-text">SELLING PROPOSITION </span></p>
                    <p className="supporting-desc-text">A supporting statement for your value proposition to encourage customers to complete your CTA</p>
                </div>

                <div className="unique-selling-area-elements">
                    <div className="time-duration-area d-flex justify-content-around align-items-center">
                        <p className="main-number">28 <span className="number-type">Days</span></p>
                        <p className="main-number">08 <span className="number-type">Hours</span></p>
                        <p className="main-number">09 <span className="number-type">Minutes</span></p>
                        <p className="main-number">07 <span className="number-type">Seconds</span></p>
                    </div>
                    <div className="join-webinar-area-elements">
                        <p className="join-webinar-text">Join <span className="join-webinar-text-extended"> the webinar today</span></p>
                        <Form className="join-webinar-form">
                            <Form.Control type="text" placeholder="Name" className="join-webinar-form-input" />
                            <Form.Control type="email" placeholder="Email" className="join-webinar-form-input" />
                            <Form.Control type="text" placeholder="Company Name" className="join-webinar-form-input" />
                            <Form.Control as="select" className="join-webinar-form-input" placeholder="Budget">
                                <option selected> Budget</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
                            </Form.Control>
                            <div class="custom-control custom-checkbox join-webinar-form-checkbox d-flex justify-content-start align-items-center">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                <label class="custom-control-label" for="customCheck1">Subscribe</label>
                            </div>
                            <Button className="btn register-btn" variant="danger" size="lg"> Register Now </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        );
    }
}


export default UniqueSelling;
