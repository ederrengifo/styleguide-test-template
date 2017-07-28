import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <div className="Header">
            <h1>Styleguide Test</h1>
          </div>
          <div className="Body">
            <div className="Color-box Blue">
              <b>Blue</b>
              <div>#41AFE4</div>
            </div>
            <div className="Color-box Green">
              <b>Green</b>
              <div>#17B583</div>
            </div>
            <div className="Color-box Red">
              <b>Red</b>
              <div>#F26363</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
