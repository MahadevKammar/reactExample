import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello welcome, {this.props.name} to the ReactJS person Class</h1>
        {/* <button onClick={this.props.changeName}>Change person name</button> */}
      </div>
    );
  }
}


export default Person;