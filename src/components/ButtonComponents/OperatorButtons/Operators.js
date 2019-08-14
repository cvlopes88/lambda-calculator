import React, {useState} from "react";

import OperatorButton from "./OperatorButton.js";
import { operators } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div>
  
      {operators.map(operator => (
         <OperatorButton operator={operator.char} />
          
      ))}



      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators;