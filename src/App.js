import React from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Display from "./components/DisplayComponents/Display";
function App() {
 
  return (
    <div className="container">
      <Logo></Logo>
      <div className="App">
        <Display></Display>
      <Specials className="specials"></Specials>
      <Operators></Operators>
      <Numbers></Numbers>

      

        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}






export default App;
