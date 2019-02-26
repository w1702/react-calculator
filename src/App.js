import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./components/display";
import ButtonPanel from "./components/buttonPanel";
import Button from "./components/button";

class App extends Component {
  state = {
    equation: { id: "equation", value: null },

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

  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <main className="container">
          {/*  Display  */}
          <Display />
          {/*  Button Panel */}
          <ButtonPanel />
        </main>
      </React.Fragment>
    );
  }

  // method(s) for adding to expression

  /** Changing the display */
  setDisplay = expression => {
    document.getElementById("display").value = expression;
  };
  getDisplay = () => {
    return document.getElementById("display").value;
  };

  /** Input check for numbers and operators */
  isNumber = num => {
    return isNaN(num);
  };
  isOperator = str => {
    let operators = ["+", "-", "*", "/", "%"];
    // can replace by array.foreach() ??
    for (var i = 0; i < operators.length; i++) {
      if (str === operators[i]) {
        return true;
      }
      return false;
    }
  };

  /** Arithmetic operations */
  add = (x, y) => {
    return x + y;
  };
  subtract = (x, y) => {
    return x - y;
  };
  mutiply = (x, y) => {
    return x * y;
  };
  divide = (x, y) => {
    return x / y;
  };
  percentage = x => {
    return x / 100;
  };
}

export default App;
