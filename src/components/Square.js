import React from 'react';

function Square(props) {
  //If there is an error, a css class will be added
  const styles = props.error ? "square square-editable error" : "square square-editable";
    return props.isInitValue ? (
      <input 
        readOnly
        className= "square" 
        value= {props.value} 
       />      
    ) : (
      <input       
        className= {styles} 
        onChange= {(e) => props.onChange(e, props.square)}
      />  
    )
  }

  export default Square;