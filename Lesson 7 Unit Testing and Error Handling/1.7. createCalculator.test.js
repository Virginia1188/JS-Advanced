const { expect } = require('chai');
const createCalculator = require('./1.7. createCalculator');

describe('tests for create calculator', function () {
    let calc = null;
    beforeEach(() => {
        calc = createCalculator();
    });
    it('returns an obj', () => {
        expect(typeof (createCalculator())).to.equal('object');
    });
    it('have an internal sum that can\'t be modified', () => {
        calc = createCalculator();
    });
    it('adds a number to the internal value', () => {
        calc.add(1);
        expect(calc.get()).to.equal(1);
    });
    it('returns zero as intial value', () => {
        expect(calc.get()).to.equal(0);
    });
    it('substracts a number to the internal value', () => {
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    });
    it('adds a string number to the internal value', () => {
        calc.add('1');
        expect(calc.get()).to.equal(1);
    });

});