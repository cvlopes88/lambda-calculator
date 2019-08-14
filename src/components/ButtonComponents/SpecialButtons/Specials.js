import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

export default function Specials () {

  const [specialState, setSpecialState] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
    <div>
     {specials.map(special => (
         <SpecialButton special={special} />
     ))}
    </div>
  );
};
