import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {increament,decreament,addfive,subfive} from '../../store/Action/action'
import Person from '../../components/Person/Person'
class Counter extends Component {
    constructor(props){
        super(props);
       this.state={ value:'sfgsgsf'}
    }   

    onChangeHandler=(event)=>{
       this.setState({value:event.target.value})
    }
      render () {
        function txt(){
            this.name
        }
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecreamentCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onaddfiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onsubfiveCounter}  />
                <button onClick={(event)=>this.props.func(event,"Rohan","Pauskar")}>CLick here</button>
                <h1>{this.props.name}</h1>
                <div border="1">
                   <Person></Person>
                </div>
            </div>
        );
    }
}

const mapStateToProps1 = state => {
    return {
        ctr: state.counter,
        name:state.name
    };
};

const mapDispatchToProps1 = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increament()),
        onDecreamentCounter: () => dispatch(decreament()),
        onaddfiveCounter: () => dispatch(addfive()),
        onsubfiveCounter: () => dispatch(subfive())
    };
};

export default connect(mapStateToProps1, mapDispatchToProps1)(Counter);