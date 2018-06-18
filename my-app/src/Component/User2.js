import React, { Component } from "react";
import axios from 'axios'
class User2 extends Component {
  state ={   
    personItems :[]
  }
  componentWillMount(){
 //  this.getData();
  }
  getData = event =>{
    axios.get('http://localhost:8081/usertask/gettingtask').then(response=>{
      console.log(response);
      this.setState({personItems:response.data});
    });
  }
  render() {   
    const users= this.state.personItems.map((UserTask,key)=>{
     return (<tr><td>{UserTask.taskName}</td> </tr>);
      
    })

    return (
      <div className="App">
        <h1>User 2 component</h1>
        <button onClick={()=>this.getData()}>GET DATA</button>
        <table border='1px' align="center" >
        {users}
       </table>
      </div>
    );
  }
}


export default User2;