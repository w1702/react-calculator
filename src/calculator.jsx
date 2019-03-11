class Calculator{

    operands = [];

    constructor(equation){
        this.equation = equation;
    }

    calculate(){
        sortEquation(this.equation);
        //solveEquation()
    }

    
    /** Splits an equation into its individual characters and sorts the characters into their respective lists */
    sortEquation(equation){
        let elements = equation.split("");
        elements.forEach(e => {
            if(this.charIsOperand(e)){
                //
            }
        });
    }

    /** Solve an equation which has been split into its respective lists */
    // solveEquation(equation){

    // }

    // doMath(o){

    // }

    operation(o, n1, n2){
        switch(o){
            case "/":
                return divide(n1, n2);
            case "*":
                return multiply(n1, n2);
            case "-":
                return subtract(n1, n2);
            case "+":
                return add(n1, n2);
            default:
                return 0;
        }
    }


    /** Character Checking */
    charIsOperand(c){
        return !isNaN(num);
    }
    charIsOperator(c){
        let operators = ["+", "-", "*", "/", "%", ".", "=", "+/-"];

        operators.forEach(o => {
            if(o === c){
                return true;
            }
        });
        return false;
    }
    charIsX(c){
        return (c === "x" || c === "X");
    }

    /** Arithmetic operations */
    add = (x, y) => {
        return x + y;
    };
    subtract = (x, y) => {
        return x - y;
    };
    multiply = (x, y) => {
        return x * y;
    };
    divide = (x, y) => {
        return x / y;
    };
    percentage = x => {
        return x / 100;
    };
}