import React, {useState} from "react";
import Operators from "./Operators";
const OperatorButton = props => {
  return (
   <button className="operator">{props.operatorVal}</button>
  )
}
export default OperatorButton;