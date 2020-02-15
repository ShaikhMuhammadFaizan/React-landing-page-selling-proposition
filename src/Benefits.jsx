import React, { Component } from 'react';
import { Container, Col, Row, Button, Image,Card, CardDeck } from 'react-bootstrap';
import BenefitImg1 from './Assets/reactJS.jpg'


import './Benefits.css';

class Benefits extends Component {
    render() {
        return (
            <Container className="benefits-area d-flex justify-content-center align-items-center">
                <Col className="color-white-text benefits-area-elements">
                    <p className="heading-text">What will you <span className="interest-text"> learn? </span></p>
                    <p className="supporting-desc-text">A supporting statement for your vakye proposition to encourage customers to complete you CTA</p>
                    <Row className="course-benefit-area">
                            <CardDeck className="course-benefit-desc-area">
                                <Card className=" d-flex justify-content-center align-items-center">
                                    <Card.Img variant="top" src={BenefitImg1} style={{width:'100px',height:'100px'}}/>
                                    <Card.Body>
                                        <Card.Title>Benefit No.1</Card.Title>
                                        <Card.Text className="benefits-desc">
                                            Add a description of your offer and key benefits how it can attract customers    
                                        </Card.Text>
                                    </Card.Body>
                                   
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={BenefitImg1} />
                                    <Card.Body>
                                        <Card.Title>Benefit No.2</Card.Title>
                                        <Card.Text className="benefits-desc">
                                        Add a description of your offer and key benefits how it can attract customers
                                        </Card.Text>
                                    </Card.Body>
                                   
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={BenefitImg1} />
                                    <Card.Body>
                                        <Card.Title>Benefit No.3</Card.Title>
                                        <Card.Text className="benefits-desc">
                                        Add a description of your offer and key benefits how it can attract customers</Card.Text>
                                    </Card.Body>
                                   
                                </Card>
                            </CardDeck>
                        </Row>

                </Col>
            </Container>
        );
    }
}


export default Benefits;
