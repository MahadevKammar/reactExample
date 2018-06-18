import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {

  myFunc=(event,name,lname)=>{
     console.log("Event: " +event +"Name is :" +name +" last name :" +lname)
  }
  render() {
    return (
      <div className="App">
       <Counter  func={this.myFunc} />
      </div>
    );
  }
}

export default App;
