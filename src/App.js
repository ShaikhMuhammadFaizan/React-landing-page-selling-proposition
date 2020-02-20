import React, { Component } from 'react';
import Header from './Header'
import Benefits from './Benefits'
import AboutTutor from './AboutTutor'
import TrustUsArea from './TrustUsArea'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-bg d-flex justify-content-center align-items-center col">
          <Header />
          <Benefits />
          <AboutTutor />
          <TrustUsArea />
        </div>
      </div>
    );
  }
}


export default App;
