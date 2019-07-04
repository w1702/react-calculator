export default class Calculator{
    definedOperators = {
        "+" : {
            value: "+",
            precedence: 1
        },
        "-" : {
            value: "-",
            precedence: 1
        },
        "*" : {
            value: "*",
            precedence: 2
        },
        "/" : {
            value: "/",
            precedence: 2
        },
        "%" : {
            value: "%",
            precedence: 2
        },
        "." : {
            value: ".",
            precedence: undefined
        },
        "=" : {
            value: "=",
            precedence: undefined
        },
        "+/-" : {
            value: "+/-",
            precedence: undefined
        }
    };

    equation;

    run(equation){
        this.equation = equation;
        const postfixEquation = this._infixToPostfix(equation)
        this._solvePostfix(postfixEquation);
    }

    _infixToPostfix(equation){
        let operatorStack = [];
        let output = "";
        const tokens = equation.split("");
        // for each token in the equation
        for(const token of tokens){
            // if it is a number
            if(this._isNumber(token)){
                // concat to output
                output += token;
            }
            // else if it is operator
            else if(this._isOperator(token)){
                // if stack is not empty
                if(operatorStack.length > 0) {
                    // get the matching token operator from definedOperators
                    let tokenOperator = this.definedOperators[token];
                    // get the operator at the top of the stack
                    let operatorAtTopOfStack = this.definedOperators[operatorStack[operatorStack.length-1]];
                    // if the operator at the top of the stack has higher precedence to the current token
                    if(operatorAtTopOfStack.precedence > tokenOperator.precedence) {
                        // pop all operators from the stack and concat to output
                        while (operatorStack.length !== 0) {
                            output += operatorStack.pop();
                        }
                    }
                    // push the current operator onto the stack
                    operatorStack.push(token);
                }
                // if the stack is empty
                else if(operatorStack.length === 0){
                    // push operator to stack
                    operatorStack.push(token);
                }
            }
        }
        // after looping through each token
        if(operatorStack.length > 0){
            // pop all operators from the stack and concat to output
            while (operatorStack.length !== 0) {
                output += operatorStack.pop();
            }
        }
        return output;
    }

    _solvePostfix(){

    }

    _isNumber(x){
        return !isNaN(x);
    }

    _isOperator(x){
        for(const operator of Object.keys(this.definedOperators)){
            if(operator === x){
                return true;
            }
        }
        return false;
    }


    // calculate(equation){
    //     this.equation = equation;
    //
    //     this._sortEquation(this.equation);
    //     this._solveEquation();
    //
    //
    //     for(const answer of this.operands){
    //         console.log("The answer to the equation is " + answer + " ");
    //     }
    // }
    //
    //
    // /** Splits an equation into its individual characters and sorts the characters into their respective lists */
    // _sortEquation(stringEquation){
    //     let elements = stringEquation.split("");
    //     for(const e of elements){
    //         if(this._charIsOperand(e)){
    //             this.operands.push(e);
    //         }
    //         else if(this._charIsOperator(e)){
    //             this.operators.push(e);
    //         }
    //     }
    // }
    //
    // /** Solve an equation which has been split into its respective lists */
    // _solveEquation(){
    //     while (this.operands.length > 1){
    //         try{
    //             if (this.operators.includes("/")){
    //                 try{
    //                     this._doMath("/");
    //                 }
    //                 catch (DivideByZeroException){
    //                     console.log("Error: Cannot divide numbers by 0 as it will result in infinity.");
    //                     break;
    //                 }
    //             }
    //             else if (this.operators.includes("*")){
    //                 this._doMath("*");
    //             }
    //             else if (this.operators.includes("-")){
    //                 this._doMath("-");
    //             }
    //             else if (this.operators.includes("+")){
    //                 this._doMath("+");
    //             }
    //         }
    //         catch{
    //             console.log("Error: Number is out of range.");
    //             break;
    //         }
    //     }
    // }
    //
    // /**
    //  * @todo Revise comment and implementation
    //  *
    //  * Performs basic arithmetic operation on two elements of a sorted array
    //  * @param {String} o The operator
    //  */
    // _doMath(o){
    //     // get the index of the input string operator
    //     let i = this.operators.indexOf(o);
    //     // get n1 from operands
    //     let n1 = Number(this.operands[i]);
    //     let n2 = Number(this.operands[i + 1]);
    //
    //     // insert into position of operation index the calculated
    //     this.operands.splice(i, 1, this._operation(o, n1, n2));
    //     // remove 2 elements from operands at position i+1
    //     //operands.RemoveRange(i + 1, 2);
    //     this.operands.splice(i + 1, 2);
    //     // remove last operator
    //     //operators.RemoveAt(i);
    //     this.operators.splice(i, 1);
    // }
    //
    // /**
    //  * Chooses the corresponding arithmetic function to the @param o operator,
    //  * performs the function with @param n1 and @param n2,
    //  * returns the result of the chosen arithmetic function
    //  * @param {String} o The operator
    //  * @param {Number} n1 The first number
    //  * @param {Number} n2 The second number
    //  * @returns {Number} The result of the chosen operation
    //  */
    // _operation(o, n1, n2){
    //     switch(o){
    //         case "/":
    //             return this._divide(n1, n2);
    //         case "*":
    //             return this._multiply(n1, n2);
    //         case "-":
    //             return this._subtract(n1, n2);
    //         case "+":
    //             return this._add(n1, n2);
    //         default:
    //             return 0;
    //     }
    // }
    //
    // /** Character Checking */
    //
    // /**
    //  * @todo Revise implementation, look into using type of?
    //  *
    //  * Checks if a single character string is an operand(Number) and returns a boolean value of the check
    //  * @param {String} c The character to be checked
    //  * @returns {Boolean} Boolean result of the check
    //  */
    // _charIsOperand(c){
    //     if(c.length === 1){
    //         return !isNaN(c);
    //     }
    // }
    //
    // /**
    //  * Checks if a single character string is in the defined set of operators and returns a boolean value of the check
    //  * @param {String} c The character to be checked
    //  * @returns {Boolean} Boolean result of the check
    //  */
    // _charIsOperator(c){
    //     if(c.length === 1){
    //         for(const o of this.definedOperators){
    //             if(o === c){
    //                 return true;
    //             }
    //         }
    //         return false;
    //     }
    // }
    //
    // /**
    //  * @todo implement the use of x in the calculator and this function
    //  *
    //  * Checks if a single character string is 'x' or 'X' and returns a boolean value of the check
    //  * @param {*} c The character to be checked
    //  * @returns {Boolean} Boolean result of the check
    //  */
    // _charIsX(c){
    //     return (c === "x" || c === "X");
    // }
    //
    // /** Arithmetic operations */
    //
    // /**
    //  * Takes the first number @param x and adds it to a second number @param y and returns the result
    //  * @param {Number} x The first number
    //  * @param {Number} y The second number
    //  * @returns {Number} The result of x + y
    //  */
    // _add(x, y){
    //     return x + y;
    // }
    //
    // /**
    //  * Takes the first number @param x and subtracts it by a second number @param y and returns the result
    //  * @param {Number} x The first number
    //  * @param {Number} y The second number
    //  * @returns {Number} The result of x - y
    //  */
    // _subtract(x, y){
    //     return x - y;
    // }
    //
    // /**
    //  * Takes the first number @param x and multiplies it by a second number @param y and returns the result
    //  * @param x The first number
    //  * @param y The second number
    //  * @returns {Number} The result of x * y
    //  */
    // _multiply(x, y){
    //     return x * y;
    // }
    //
    // /**
    //  * Takes the first number @param x and divides it by a second number @param y and returns the result
    //  * @param {Number} x The first number
    //  * @param {Number} y The second number
    //  * @returns {Number} The result of x / y
    //  */
    // _divide(x, y){
    //     return x / y;
    // }
    //
    // /**
    //  * @todo comments and implementation
    //  */
    // _percentage(x){
    //     return x / 100;
    // }
}