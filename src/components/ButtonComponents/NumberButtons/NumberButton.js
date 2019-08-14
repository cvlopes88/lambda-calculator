import React, {useState} from "react";

import Numbers from "./Numbers"
const NumberButton = props => {
  return (
    
     <button className="numbs"> {props.number} </button>
    
  ) 
}
export default NumberButton;