import React from "react";
import Calculator from "./calculator";

it("Converts infix to postfix", () => {
   let calculator = new Calculator();
   const actual = calculator._infixToPostfix("2+3*4-5+7*6/3-2*3");
   const expected = "234*+5-76*3/+23*-"
   expect(actual).toEqual(expected);
});

