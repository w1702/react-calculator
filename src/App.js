import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Display from "./components/display";
import ButtonPanel from "./components/buttonPanel";

class App extends Component {
  state = {
    equation: { id: "equation", value: "" },

    ButtonPanel: [
      // Row 1
      { id: "C", value: "C" }, // Clear
      { id: "+/-", value: "+/-" }, // Positive/ Negative
      { id: "%", value: "%" }, // Percentage
      { id: "/", value: "/" }, // Division
      // Row 2
      { id: "7", value: "7" }, // 7
      { id: "8", value: "8" }, // 8
      { id: "9", value: "9" }, // 9
      { id: "*", value: "*" }, // Multiplication
      // Row 3
      { id: "4", value: "4" }, // 4
      { id: "5", value: "5" }, // 5
      { id: "6", value: "6" }, // 6
      { id: "-", value: "-" }, // Subtraction
      // Row 4
      { id: "1", value: "1" }, // 1
      { id: "2", value: "2" }, // 2
      { id: "3", value: "3" }, // 3
      { id: "+", value: "+" }, // Addition
      // Row 5
      { id: "0", value: "0" }, // 0
      { id: ".", value: "." }, // Decimal point
      { id: "=", value: "=" } // Equals
    ]
  };

  constructor(){
      super();
      let operators = [];
      let operands = [];
  }

  render() {
    return (
      <React.Fragment>
        <main className="container">
          {/*  Display  */}
          <Display />
          {/*  Button Panel */}
          <ButtonPanel 
            buttons = {this.state.ButtonPanel}
            onKeyPress = {this.handleKeyPress}
          />
        </main>
      </React.Fragment>
    );
  }

  /**
   * Check key pressed
   * If the key pressed is a number or operator, display the corresponding key
   * Else if the key pressed is "C", clear the display
   */
  // method(s) for adding to expression
//   handleKeyPress = key => {
//     if(this.keyIsNumberOrOperator(key)){
//         this.setDisplay(this.props.value);
//     }
//     else if(key === "="){
//         solveEquation();
//     }
//     else if(key === "C"){
//         this.clearDisplay();
//     }
//   }

  /** Changing the display */
  setDisplay = pressedKey => {
    document.getElementById("display").value = pressedKey;
  };
  clearDisplay = () =>{
    document.getElementById("display").value = null;
  }
  getDisplay = () => {
    return document.getElementById("display").value;
  };
}

export default App;
