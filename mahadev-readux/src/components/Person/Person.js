import React, {Component} from 'react';
import CounterControl from '../CounterControl/CounterControl.css'

class Person extends Component{
    render(){
        return(
            <div >
                <div styles={{'border-style':'solid','border-width':'5px'}}>
                <table border='0' width="40%" align="center" frame="box">
                <th colSpan='2'><h3>Enter the valid Details </h3></th>
                <tr><td align="right">Name:</td><td align="left"><input type="text"/></td></tr>
                <tr><td align="right">Email:</td><td align="left"><input type="text"/></td></tr>
                <tr><td align="right">Password:</td><td align="left"><input type="text"/></td></tr>
                <tr><td align="right">Mobile number:</td><td align="left"><input type="text"/></td></tr>
                <tr><td align="right">City:</td><td align="left"><input type="text"/></td></tr>
                <tr><td align="right">Pincode:</td><td align="left"><input type="text"/></td></tr>
                <th colSpan='2'><h3><button type="submit">Submit</button> </h3></th>
                </table>
                </div>
            </div>
        )
    }
}

export default Person;