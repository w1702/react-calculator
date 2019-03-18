class Calculator{
    operators = [];
    operands = [];
    equation;

    calculate(equation){
        this.equation = equation;

        this.sortEquation(this.equation);
        this.solveEquation();
        

        for(const answer of this.operands){
            console.log("The answer to the equation is " + answer + " ");
        }
    }

    
    /** Splits an equation into its individual characters and sorts the characters into their respective lists */
    sortEquation(stringEquation){
        let elements = stringEquation.split("");
        for(const e of elements){
            if(this.charIsOperand(e)){
                this.operands.push(e);
            }
            else if(this.charIsOperator(e)){
                this.operators.push(e);
            }
        }

        //Seeing if elements are in correct lists
        // console.log("operands[] contains: ")
        // for(const o of this.operands){
        //     console.log(o + " ");
        // }
        // console.log("operators[] contains: ")
        // for(const o of this.operators){
        //     console.log(o + " ");
        // }
    }

    /** Solve an equation which has been split into its respective lists */
    solveEquation(){
        while (this.operands.length > 1){
            try{
                if (this.operators.includes("/")){
                    try{
                        this.doMath("/");
                    }
                    catch (DivideByZeroException){
                        console.log("Error: Cannot divide numbers by 0 as it will result in infinity.");
                        break;
                    }
                }
                else if (this.operators.includes("*")){
                    this.doMath("*");
                }
                else if (this.operators.includes("-")){
                    this.doMath("-");
                }
                else if (this.operators.includes("+")){
                    this.doMath("+");
                }
            }
            catch{
                console.log("Error: Integer is out of range.");
                break;
            }
        }
    }
    /** Performs basic arithmetic operation on two elements of a sorted array */
    doMath(stringOperator){
        // get the index of the input string operator
        let i = this.operators.indexOf(stringOperator);
        // get n1 from operands
        let n1 = Number(this.operands[i]);
        let n2 = Number(this.operands[i + 1]);

        // insert into position of operation index the calculated 
        this.operands.splice(i, 1, this.operation(stringOperator, n1, n2));
        // remove 2 elements from operands at position i+1
        //operands.RemoveRange(i + 1, 2);
        this.operands.splice(i + 1, 2);
        // remove last operator
        //operators.RemoveAt(i);
        this.operators.splice(i, 1);
    }

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
    charIsOperator(c){
        const operators = ["+", "-", "*", "/", "%", ".", "=", "+/-"];

        for(const o of operators){
            if(o === c){
                return true;
            }
        }
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