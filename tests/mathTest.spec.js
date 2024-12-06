import { test, expect } from '@playwright/test';
import { addition, subtraction, division, multiplication } from '../src/simpleMath.js';

test('Addition', async () => {
    const result = addition(1, 2);
    expect(result).toBe(3);
});

test('Subtraction', async () => {
    const result = subtraction(3, 2);
    expect(result).toBe(1);
});

test('Multiplication', async () => {
    const result = multiplication(2, 3);
    expect(result).toBe(6);
});

test('Division', async () => {
    const result = division(6, 3);
    expect(result).toBe(2);
});