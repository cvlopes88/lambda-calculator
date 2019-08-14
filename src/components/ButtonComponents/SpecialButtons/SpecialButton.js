import React, {useState} from "react";
import specials from "./Specials"
const SpecialButton = props => {
  return (
   <button className="special">{props.special} </button>
  );
};
export default SpecialButton;