"use strict";

export const add = (a, b) => a + b;

export const minus = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
    if (!b) return new Error("division by zero");
    return a / b;
};
