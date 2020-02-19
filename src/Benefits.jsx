import React, { Component } from 'react';
import { Container, Col, Image, } from 'react-bootstrap';
import BenefitImg1 from './Assets/reactJS.jpg'


import './Benefits.css';

class Benefits extends Component {
    render() {
        return (
            <Container className="benefits-area d-flex justify-content-center align-items-center">
                <Col className="color-white-text benefits-area-elements">
                    <p className="heading-text">What will you <span className="interest-text"> learn? </span></p>
                    <p className="supporting-desc-text">A supporting statement for your value proposition to encourage customers to complete you CTA</p>
                    <div className="d-flex justify-content-between align-items-center benefit-box-area">
                        <div className="d-flex justify-content-center align-items-center benefit-box">
                            <Image src={BenefitImg1} style={{width:'70px',height:'70px'}}/>
                            <p className="benefit-text benefit-heading-text benefit-odd">Benefit <span className="benefit-num-text-lt-blue">1</span> </p>
                            <p className="benefit-desc-text benefit-odd benefit-desc">Add a description of your offer and key benifits what it is and how it helps</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center benefit-box blue-box">
                            <Image src={BenefitImg1} style={{width:'70px',height:'70px'}}/>
                            <p className="benefit-text benefit-heading-text color-white-text benefit-even">Benefit <span className="benefit-num-text-dr-blue">2</span> </p>
                            <p className="benefit-desc-text benefit-even benefit-desc">Add a description of your offer and key benifits what it is and how it helps</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center benefit-box">
                            <Image src={BenefitImg1} style={{width:'70px',height:'70px'}}/>
                            <p className="benefit-text benefit-heading-text benefit-odd">Benefit <span className="benefit-num-text-lt-blue">3</span> </p>
                            <p className="benefit-desc-text benefit-odd benefit-desc">Add a description of your offer and key benifits what it is and how it helps</p>
                        </div>
                    </div>

                </Col>
            </Container>
        );
    }
}

export default Benefits;
