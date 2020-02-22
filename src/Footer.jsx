import React, { Component } from 'react';
import { Container, Col, Image, } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare ,faTwitterSquare, faGooglePlusSquare, faLinkedin  } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <Col className="color-white-text footer">
        <p className="heading-text"><span className="interest-text">Share</span> this Webinar</p>
        <p className="supporting-desc-text">A supporting statement for your value proposition to encourage customers to complete your CTA</p>
        <div className="social-icons-area d-flex justify-content-between align-items-center">
          <FontAwesomeIcon icon={faFacebookSquare} size="3x"/>
          <FontAwesomeIcon icon={faInstagramSquare} size="3x"/>
          <FontAwesomeIcon icon={faTwitterSquare} size="3x"/>
          <FontAwesomeIcon icon={faGooglePlusSquare} size="3x"/>
          <FontAwesomeIcon icon={faLinkedin} size="3x"/>

        </div>
      </Col>
    );
  }
}


export default Footer;
