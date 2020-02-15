import React, { Component } from 'react';
import { Container, Col, Row, Button, Image, Card, CardDeck, } from 'react-bootstrap';
import BenefitImg1 from './Assets/reactJS.jpg'


import './Benefits.css';

class Benefits extends Component {
    render() {
        return (
            <Container className="benefits-area d-flex justify-content-center align-items-center">
                <Col className="color-white-text benefits-area-elements">
                    <p className="heading-text">What will you <span className="interest-text"> learn? </span></p>
                    <p className="supporting-desc-text">A supporting statement for your vakye proposition to encourage customers to complete you CTA</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-center align-items-center benefit-box">
                            <Image src={BenefitImg1} style={{width:'70px',height:'70px'}}/>
                            <p className="benefit-text">Benefit <span className="benefit-num-text">1</span> </p>
                            <p className="benefit-desc-text">Add a description of your offer and key benifits what it is and how it helps</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center benefit-box blue-box">
                            <Image src={BenefitImg1} style={{width:'70px',height:'70px'}}/>
                            <p className="benefit-text">Benefit <span className="benefit-num-text">1</span> </p>
                            <p className="benefit-desc-text">Add a description of your offer and key benifits what it is and how it helps</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center benefit-box">
                            <Image src={BenefitImg1} style={{width:'70px',height:'70px'}}/>
                            <p className="benefit-text">Benefit <span className="benefit-num-text">1</span> </p>
                            <p className="benefit-desc-text">Add a description of your offer and key benifits what it is and how it helps</p>
                        </div>
                    </div>

                </Col>
            </Container>
        );
    }
}


export default Benefits;
