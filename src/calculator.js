import { addition, subtraction, multiplication, division } from './simpleMath.js';

class Calculator {
    add(a, b) {
        return addition(a, b);
    }

    subtract(a, b) {
        return subtraction(a, b);
    }

    multiply(a, b) {
        return multiplication(a, b);
    }

    divide(a, b) {
        return division(a, b);
    }

    calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return this.add(a, b);
            case '-':
                return this.subtract(a, b);
            case '*':
                return this.multiply(a, b);
            case '/':
                return this.divide(a, b);
            default:
                return 'Invalid operator';
        }
    }


}

export default Calculator;