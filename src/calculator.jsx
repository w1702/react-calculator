class Calculator{
    operators = [];
    operands = [];
    equation;

    constructor(equation){
        this.equation = equation;
    }

    calculate(){
        //sortEquation(this.equation);
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
                return this.divide(n1, n2);
            case "*":
                return this.multiply(n1, n2);
            case "-":
                return this.subtract(n1, n2);
            case "+":
                return this.add(n1, n2);
            default:
                return 0;
        }
    }


    /** Character Checking */
    charIsOperand(c){
        return !isNaN(c);
    }
    // TODO something wrong with this method
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
    add(x, y){
        return x + y;
    };
    subtract(x, y){
        return x - y;
    };
    multiply(x, y){
        return x * y;
    };
    divide(x, y){
        return x / y;
    };
    percentage(x){
        return x / 100;
    };
}

export default Calculator;