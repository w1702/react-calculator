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
function assertEquals(stringMethodName, expectedInput, expectedOutput){
    // TODO
    if(expectedInput === expectedOutput){
        console.log(stringMethodName + " " + (expectedInput === expectedOutput));
    }
    else{
        
    }
    // else return error message
}
let c = new Calculator();


// Unit testing

assertEquals("charIsOperator() with operator", c.charIsOperator("+"), true);
assertEquals("charIsX() with x", c.charIsX("x"), true);
assertEquals("charIsX() with not x", c.charIsX("a"), false);
assertEquals("add()", c.add(2, 1), 3);
assertEquals("subtract()", c.subtract(5, 2), 3);
assertEquals("multiply()", c.multiply(2, 2), 4);
assertEquals("divide()", c.divide(10,5, 0.01), 2);
assertEquals("percentage()", c.percentage(1), 0.01);