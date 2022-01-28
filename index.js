import { question } from 'readline-sync';
import { add, minus, multiply, divide, module } from './app/calculator.js';

const firstNumber = parseInt(question('Ingrese el primer numero:'));
const secondNumber = parseInt(question('Ingrese el segundo numero:'));

console.log(`Add ${firstNumber} + ${secondNumber} = ${add(firstNumber, secondNumber)}`);
console.log(`Minus ${firstNumber} - ${secondNumber} = ${minus(firstNumber, secondNumber)}`);
console.log(`Multiply ${firstNumber} x ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);
console.log(`Divide ${firstNumber} ÷ ${secondNumber} = ${divide(firstNumber, secondNumber)}`);
console.log(`Module ${firstNumber} ÷ ${secondNumber} = ${module(firstNumber, secondNumber)}`);