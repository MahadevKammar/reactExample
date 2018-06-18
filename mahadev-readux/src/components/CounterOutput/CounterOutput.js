import React,{Component} from 'react';

import './CounterOutput.css';



class CounterOutput extends Component
{
    render(){
        return(
            <div className="CounterOutput">
            Current Counter: {this.props.value}
        </div>
        );
    }
}
// const counterOutput = (props) => (
//     <div className="CounterOutput">
//         Current Counter: {props.value}
//     </div>
// );

export default CounterOutput;