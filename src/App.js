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
            <div className="Color-blue">
              Blue
            </div>
            <div className="Color-green">
              Green
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
