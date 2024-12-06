import Calculator from "../src/calculator";
import { test, expect } from '@playwright/test';

let calculator = new Calculator();

test("should add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("should subtract two numbers", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
});

test("should multiply two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test("should divide two numbers", () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test("should return 'Invalid operator' if operator is not '+', '-', '*' or '/'", () => {
    expect(calculator.calculate(1, 2, '%')).toBe("Invalid operator");
});

test("should return the result of the operation", () => {
    expect(calculator.calculate(1, 2, "+")).toBe(3);
    expect(calculator.calculate(2, 1, "-")).toBe(1);
    expect(calculator.calculate(2, 3, "*")).toBe(6);
    expect(calculator.calculate(6, 2, "/")).toBe(3);
});