import React, { Component } from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import YouTube from 'react-youtube';

import ClockImg from './Assets/clock.png'
import Calender from './Assets/calender.png'

import './Header.css';

class Header extends Component {

  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {

    const opts = {
      height: '260',
      width: '100%',
      playerVars: {
        autoplay: 1
      }
      
    };
    return (
      <div className="header-area d-flex justify-content-center align-items-center">
        <Container className="d-flex justify-content-center align-items-center">
          <Col>
            <p className="color-white-text small-company-name">Webinaringl</p>
            <p className="color-white-text thin-big-text">YOUR UNIQUE <span className="big-heading-text">SELLING PROPOSITION </span></p>
            <p className="color-white-text supporting-desc-text">A supporting statement for your value proposition to encourage customers to complete your CTA</p>
            <div className="video-area">

              <div className="video-info d-flex justify-content-between align-items-center row text-left">
                <div className="row d-flex justify-content-between align-items-center row ">
                  <Image src={Calender} style={{ width: '20px', height: '20px' }} />
                  <p className="color-white-text video-info-text">Thursday, July 22</p>
                </div>
                <div className="row d-flex justify-content-center align-items-center row ">
                  <Image src={Calender} style={{ width: '20px', height: '20px' }} />
                  <p className="color-white-text video-info-text">6 PM EST</p>
                </div>
              </div>

              <div className="video-player">
                <YouTube
                  videoId="sX1Y2JMK6g8"
                  opts={opts}
                  onReady={this._onReady}
                />
              </div>
            </div>

            <div className="see-your-spo-btn-area">
              <Button className="see-your-spot-btn" variant="danger" size="lg"> Save Your Spot </Button>
            </div>

          </Col>
        </Container>

      </div>
    );
  }
}


export default Header;
