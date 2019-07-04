import React from "react";
import Calculator from "./calculator";

it("Converts infix to postfix", () => {
   let calculator = new Calculator();
   const actual = calculator._infixToPostfix("1+2*3-4/1-5");
   const expected = "123*+41/-5-"
   expect(actual).toEqual(expected);
});