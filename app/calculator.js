export const add = (a, b) => a + b;

export const minus = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
    if (!b) return new Error("Can not divide by zero");
    return parseFloat((a / b).toFixed(2));
};

export const module = (a, b) => a % b;
