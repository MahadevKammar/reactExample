import React from 'react';
import {reduxForm,Field} from 'redux-form'
import {User as usercss} from './User.css'
import {validate} from './UseValidate'
import {showValues} from './showResults'
import {RingLoader } from 'react-spinners'
import { connect } from 'react-redux';
import {authenticating} from '../store/action/action'

let loading=false;
//rednering the input
let renderInput = ({ input, meta, label,type }) => {
  return <div >
    {/* <pre> {JSON.stringify(meta,0,2)}</pre> */}
    <label>{label}</label>
    <input {...input} type={type} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </div>
}



let User = (props) => { 
 //injected by Redux-form
    const { handleSubmit,submitting } =  props 
   
   
    var showValues1 = (values) => {
    props.authenticatingD(true);
    console.log("Is Authenticated? " +props.authenticating)
    console.log(loading)
    setTimeout(function(){      
      props.authenticatingD(false)
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);     
      console.log(loading);
    },2000);
 }
  
  return (
    <div>
      <p> {props.authenticating}</p>
       {props.authenticating ?( 
       <div className='layout'>
          <RingLoader
           color={'#123abc'} 
           loading={true} 
                      />
           <p className="layout1">submitting...</p>
         </div>):(
          <form onSubmit={handleSubmit(showValues1)} className="signup-form">
            <h1 className="signup-title">Enter User Details</h1>
            <Field name="userName" label="User Name:" type="text" component={renderInput} />
            <Field name="email" label="Email:" type="text" component={renderInput} />
            <Field name="password" label="Password:" type="password" component={renderInput} />
            <Field name="mobile" label="Mobile:" type="text" component={renderInput} />
            <Field name="zip" label="Zip:" type="text" component={renderInput} />
            <div align="center">
              <button type="submit" className="submit-btn" disabled={submitting} >Submit</button>
            </div>      
          </form>
         )
       }
</div>
  )
}


const mapStateToProps = state => {
  console.log('state:', state.reducer.authenticating); 
  return {
      authenticating : state.reducer.authenticating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticatingD: (spin) => dispatch(authenticating(spin)),
      
  };
};

User = reduxForm({
  form: 'user',
  destroyOnUnmount: false,
  validate
})(User);

export default  connect(mapStateToProps, mapDispatchToProps)(User);
