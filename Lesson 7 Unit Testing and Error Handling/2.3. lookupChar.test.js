const { expect, assert } = require('chai');
const lookupChar = require('./2.3. lookupChar');

describe('lookupChar', function () {
    it('returns undefined if first parameter is not a string', () => {
        let string = 1;
        let index = 1;
        expect(lookupChar(string, index)).to.be.undefined;
    });
    it('returns undefined if second parameter is not a number', () => {
        let string = 'aaa';
        let index = 'a';
        expect(lookupChar(string, index)).to.be.undefined;
    });
    it('returns incorrect index when index is negative', () => {
        let string = 'aaa';
        let index = -1;
        expect(lookupChar(string, index)).to.equal('Incorrect index');
    });
    it('returns incorrect index when index is bigger than the lenght', () => {
        let string = 'aaa';
        let index = 10;
        expect(lookupChar(string, index)).to.equal('Incorrect index');
    });
    it('returns the correct character', () => {
        let string = 'abc';
        let index = 0;
        expect(lookupChar(string, index)).to.equal('a');
    });
    it('returns incorrect index when index is euqal to the lenght', () => {
        let string = 'aaa';
        let index = 3;
        expect(lookupChar(string, index)).to.equal('Incorrect index');
    });
    it('returns incorrect index when index is not an integer number', () => {
        let string = 'aaa';
        let index = 1.5;
        expect(lookupChar(string, index)).to.be.undefined;
    });
    it('returns the correct character', () => {
        expect(lookupChar('abc', 2)).to.equal('c');
    });
});