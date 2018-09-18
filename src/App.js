import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';

import './App.css';

class App extends Component {
state={
  Persons:[
    {name:"Anshuman1", age:28},
    {name:"Anshuman4", age:29},
    {name:"Anshuman5", age:27}
  ]
};
changeNameHandler=()=>{

  this.setState({
    Persons:[
      {name:"Anshuman11", age:48},
      {name:"Anshuman41", age:49},
      {name:"Anshuman51", age:47}
    ] 
  });
};
revertNameHandler=()=>{

  this.setState({
    Persons:[
      {name:"Anshuman1", age:28},
      {name:"Anshuman4", age:29},
      {name:"Anshuman5", age:27}
    ]
  });
};
changeNameHandler=(event)=>{

  this.setState({
    Persons:[
      {name:"Anshuman1", age:28},
      {name:event.target.value, age:29},
      {name:"Anshuman5", age:27}
    ]
  });
};
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
   <button onClick={this.changeNameHandler}>App update Name </button>
   <button onClick={this.revertNameHandler}>App revert Name </button>
        <Person 
          name={this.state.Persons[0].name} 
          // clickUpdate={this.changeNameHandler}  
          // clickRevert={this.revertNameHandler}  
          changeName={this.changeNameHandler}  
          age={this.state.Persons[0].age}>
        </Person>
        <Person 
          name={this.state.Persons[1].name} changeName={this.changeNameHandler}  
          age={this.state.Persons[1].age}>
        </Person>
        <Person 
          name={this.state.Persons[2].name} changeName={this.changeNameHandler}  
          age={this.state.Persons[2].age}>
          q</Person>
      </div>
    );
  };
};

export default App;
