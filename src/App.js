import React, { Component } from 'react';
import Header from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-bg d-flex justify-content-center align-items-center">
          <Header />
        </div>
      </div>
    );
  }
}


export default App;
