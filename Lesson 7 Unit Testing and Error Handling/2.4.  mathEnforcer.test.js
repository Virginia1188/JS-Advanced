const { assert, expect } = require('chai');
const mathEnforcer = require('./2.4.  mathEnforcer');

describe('substractTen', function () {

    it('substractTen returns undefined if parameter is not a number', () => {
        assert.equal(mathEnforcer.subtractTen('a'), undefined);
    });
    it('substractTen returns substracts the parameter and returns the result', () => {
        assert.equal(mathEnforcer.subtractTen(11), '1');
    });
    it('returns negative number', () => {
        assert.equal(mathEnforcer.subtractTen(1), '-9');
    });
    it('returns correct result with negative number', () => {
        assert.equal(mathEnforcer.subtractTen(-20), '-30');
    });
    it('returns correct result with floating-pont numbers', () => {
        expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(1,0.5);
    });

});

describe('addFive', function () {
    it('addFive returns undefined if parameter is not a number', () => {
        assert.equal(mathEnforcer.addFive('a'), undefined);
    });
    it('addFive returns the sum of the parameter and 5', () => {
        assert.equal(mathEnforcer.addFive(1), '6');
    });
    it('addFive returns undefined if parameter is not a number', () => {
        assert.equal(mathEnforcer.addFive('a'), undefined);
    });
    it('addFive returns the sum of the parameter and 5', () => {
        assert.equal(mathEnforcer.addFive(1), '6');
    });
    it('addFive returns the sum with floating-point numbers', () => {
        assert.equal(mathEnforcer.addFive(1.1), '6.1');
    });
    it('addFive returns the correct result with negative number', () => {
        assert.equal(mathEnforcer.addFive(-10), '-5');
    });

});
describe('sum', function () {
    it('returns undefined if the first parameters is not a number', () => {
        assert.equal(mathEnforcer.sum('1', 1), undefined);
    });
    it('returns the sum of the two parameters', () => {
        assert.equal(mathEnforcer.sum(1, 1), '2');
    });
    it('returns undefined if the second parameters is not a number', () => {
        assert.equal(mathEnforcer.sum(1, '1'), undefined);
    });
    it('sums floating-point numbers', () => {
        assert.equal(mathEnforcer.sum(1.1, 1.1), '2.2');
    });
    it('sums negative numbers', () => {
        assert.equal(mathEnforcer.sum(-1, -1), '-2');
    });

});
