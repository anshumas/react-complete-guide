import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
   </p>
        <Person name="anshuman1" age="13">d</Person>
        <Person name="anshuman2" age="23">w</Person>
        <Person name="anshuman3" age="33">q</Person>
      </div>
    );
  }
}

export default App;
