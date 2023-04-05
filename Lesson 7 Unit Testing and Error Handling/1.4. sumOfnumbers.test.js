const { expect } = require('chai');
const sum = require('./1.4. sum');

describe('Sum Check', function () {
    it('return true for array of numbers', () => {
        const arr = [1, 2, 3, 4];
        expect(sum(arr)).to.equal(10);
    });
    it('returns the sum of the values', () => {
        const arr = [1, 1, 1, 1];
        expect(sum(arr)).to.equal(4);
    });
    it('returns zero with empty arr', () => {
        const arr = [];
        expect(sum(arr)).to.equals(0);
    });
});