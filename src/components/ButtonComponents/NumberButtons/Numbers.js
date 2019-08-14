import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";
console.log(numbers)
// import NumberButton from "./NumberButton.js"
//import any components needed

//Import your array data to from the provided data file

export default function Numbers () {
  const [numberState, setNumberState] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
 {numbers.map(number => (
         <NumberButton number={number} />
          
      ))}
 }



      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
    
  );
};
// console.log(item);

