import React, {useState} from "react";
import specials from "./Specials"
const SpecialButton = props => {
  return (
   <button>{props.specials}</button>
  );
};
export default SpecialButton;