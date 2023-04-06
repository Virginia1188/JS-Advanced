const {expect} = require('chai');
const isOddOrEven = require('./2.2. isOddOrEven');

describe('isOddOrEven', function(){
    it('returns undefined if parametars are not a string',() =>{
        const string = 111;
        expect(isOddOrEven(string)).to.be.undefined;
    });
    it('returns odd when the lenght is odd',() =>{
        const string = '111';
        expect(isOddOrEven(string)).to.equal('odd');
    });
    it('returns even when the lenght is even',() =>{
        const string = '11';
        expect(isOddOrEven(string)).to.equal('even');
    });
});