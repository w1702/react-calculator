class Calculator{
      /** Calulating the equation */
    solveEquation(equation){


        
        

        // while there is a at least one operand in the equation  


        // clear the array
    }

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
  
    sortEquation(equation){
        let elements = equation.split("");
        elements.forEach(e => {
            if()
        });
    }

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