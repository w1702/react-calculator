import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

import Calculator from "./calculator.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



// Testing prep
function assertEquals(stringMethodSignature, methodToBeTested, expectedOutput){
    console.log(stringMethodSignature + " " + "(" + (methodToBeTested === expectedOutput) + ")");
}
let c = new Calculator();


// Unit testing



// TODO: test sortEquation()
assertEquals("operation(\"+\", 1, 1)", c.operation("+", 1, 1), 2);
assertEquals("operation(\"-\", 1, 1)", c.operation("-", 1, 1), 0);
assertEquals("operation(\"*\", 1, 1)", c.operation("*", 1, 1), 1);
assertEquals("operation(\"/\", 1, 0.5)", c.operation("/", 1, 2), 0.5);
assertEquals("charIsOperand(1) with 1", c.charIsOperand(1), true)
assertEquals("charIsOperand(1.0)", c.charIsOperand(1.0), true)
assertEquals("charIsOperand(\"a\")", c.charIsOperand("a"), false)
assertEquals("charIsOperator(\"x\")", c.charIsOperator("+"), true);
assertEquals("charIsOperator(\"a\")", c.charIsOperator("a"), false);
assertEquals("charIsX(\"x\")", c.charIsX("x"), true);
assertEquals("charIsX(\"a\")", c.charIsX("a"), false);
assertEquals("add(2, 1)", c.add(2, 1), 3);
assertEquals("subtract(5, 2)", c.subtract(5, 2), 3);
assertEquals("multiply(2, 2)", c.multiply(2, 2), 4);
assertEquals("divide(10, 5)", c.divide(10, 5), 2);
assertEquals("percentage(1)", c.percentage(1), 0.01);