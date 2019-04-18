import TestUtils from "./testUtils.jsx";
import Calculator from "../calculator.jsx";

export default class CalculatorTest{
    c = new Calculator();

    test(){
        let sortEquationTest = () =>{
            let equation = "1+1";
            this.c._sortEquation(equation);

            TestUtils.assertEquals("Operands Match", JSON.stringify(this.c.operands), JSON.stringify(["1", "1"]));
            TestUtils.assertEquals("Operators Match", JSON.stringify(this.c.operators), JSON.stringify(["+"]));
        }; 
        sortEquationTest();



        TestUtils.assertEquals("operation(\"+\", 1, 1)", this.c._operation("+", 1, 1), 2);
        TestUtils.assertEquals("operation(\"-\", 1, 1)", this.c._operation("-", 1, 1), 0);
        TestUtils.assertEquals("operation(\"*\", 1, 1)", this.c._operation("*", 1, 1), 1);
        TestUtils.assertEquals("operation(\"/\", 1, 0.5)", this.c._operation("/", 1, 2), 0.5);
        TestUtils.assertEquals("charIsOperand(1) with 1", this.c._charIsOperand(1), true)
        TestUtils.assertEquals("charIsOperand(1.0)", this.c._charIsOperand(1.0), true)
        TestUtils.assertEquals("charIsOperand(\"a\")", this.c._charIsOperand("a"), false)
        TestUtils.assertEquals("charIsOperator(\"x\")", this.c._charIsOperator("+"), true);
        TestUtils.assertEquals("charIsOperator(\"a\")", this.c._charIsOperator("a"), false);
        TestUtils.assertEquals("charIsX(\"x\")", this.c._charIsX("x"), true);
        TestUtils.assertEquals("charIsX(\"a\")", this.c._charIsX("a"), false);
        TestUtils.assertEquals("add(2, 1)", this.c._add(2, 1), 3);
        TestUtils.assertEquals("subtract(5, 2)", this.c._subtract(5, 2), 3);
        TestUtils.assertEquals("multiply(2, 2)", this.c._multiply(2, 2), 4);
        TestUtils.assertEquals("divide(10, 5)", this.c._divide(10, 5), 2);
        TestUtils.assertEquals("percentage(1)", this.c._percentage(1), 0.01);
    }
}