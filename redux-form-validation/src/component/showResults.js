export var showValues = (props) => {
    props.authenticatingD(true);
    console.log("Is Authenticated? " +props.authenticating)
    
    setTimeout(function(){      
       window.alert(`You submitted:\n\n${JSON.stringify(props.values, null, 2)}`);     
      
       props.authenticatingD(false)
      },2000);
}


