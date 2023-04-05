const { expect } = require('chai');
const isSymmetric = require('./1.5. isSymmetric');

describe('tests for isSymetric', function () {
    it('return true for symetric array ', () => {
        const arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it('returns false for non symetric array', () => {
        const arr = [1, 2, 3, 1];
        expect(isSymmetric(arr)).to.be.false;
    });
    it('return false for symetric string', () => {
        const arr = 'abba';
        expect(isSymmetric(arr)).to.be.false;
    });
    it('return true for odd elements', () => {
        const arr = [1, 2, 3, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it('returns false if one element is a string', () => {
        const arr = [1, '2', 2, 1];
        expect(isSymmetric(arr)).to.be.false;
    });
});