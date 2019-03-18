class Calculator{
    operators = [];
    operands = [];
    equation;

    constructor(equation){
        this.equation = equation;
    }

    calculate(){
        this.sortEquation(this.equation);
        //solveEquation()
    }

    
    /** Splits an equation into its individual characters and sorts the characters into their respective lists */
    sortEquation(stringEquation){
        let elements = stringEquation.split("");
        for(let e of elements){
            if(this.charIsOperand(e)){
                this.operands.push(e);
            }
            else if(this.charIsOperator(e)){
                this.operators.push(e);
            }
        }

        //Seeing if elements are in correct lists
        // console.log("operands[] contains: ")
        // for(let o of this.operands){
        //     console.log(o + " ");
        // }
        // console.log("operators[] contains: ")
        // for(let o of this.operators){
        //     console.log(o + " ");
        // }
    }

    /** Solve an equation which has been split into its respective lists */
    solveEquation(equation){
        /*
        while (operands.Count > 1)
            {
                try
                {
                    if (operators.Contains("/"))
                    {
                        try
                        {
                            DoMath("/");
                        }
                        catch (DivideByZeroException)
                        {
                            Console.WriteLine("Error: Cannot divide numbers by 0 as it will result in infinity.");
                            break;
                        }
                    }
                    else if (operators.Contains("*"))
                    {
                        DoMath("*");
                    }
                    else if (operators.Contains("-"))
                    {
                        DoMath("-");
                    }
                    else if (operators.Contains("+"))
                    {
                        DoMath("+");
                    }
                }
                catch
                {
                    Console.WriteLine("Error: Integer is out of range.");
                    break;
                }
            }
        */
    }

    /** Performs basic arithmetic operation on two elements of a sorted array */
    doMath(o){
        /*
        int i = operators.IndexOf(o);
            int n1 = Convert.ToInt32(operands[i]);
            int n2 = Convert.ToInt32(operands[i + 1]);
            operands.Insert(i, Convert.ToString(Operation(o, n1, n2)));
            operands.RemoveRange(i + 1, 2);
            operators.RemoveAt(i);
        */
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
        let operators = ["+", "-", "*", "/", "%", ".", "=", "+/-"];

        for(let o of operators){
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