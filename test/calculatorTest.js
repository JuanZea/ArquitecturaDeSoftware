import { expect } from 'chai';
import { add, minus, multiply, divide, module } from '../app/calculator.js';

const expectError = new Error("Can not divide by zero");

describe('Calculator Tests', () => {
    it('Testing add', () => {
        expect(add(2, 9)).to.equal(11);
    }),

    it('Testing minus', () => {
        expect(minus(2, 9)).to.equal(-7);
    }),

    it('Testing multiply', () => {
        expect(multiply(2, 9)).to.equal(18);
    }),

    describe('Testing divide', () => {
        it('Testing normal division', () => {
            expect(divide(2, 9)).to.equal(0.22);
        }),

        it('Testing division by zero', () => {
            expect(divide(2, 0).message).to.equal(expectError.message);
        })
    })

    it('Testing module', () => {
        expect(module(2, 9)).to.equal(2);
    })
    
})
