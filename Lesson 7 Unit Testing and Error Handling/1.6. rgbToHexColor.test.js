const { expect } = require('chai');
const rgbToHexColor = require('./1.6. rgbToHexColor');

describe('tests for rgb to color', function () {
    it('returns undefined if one of the values is string', () => {
        
        expect(rgbToHexColor(1, 'aaa', 1)).to.be.undefined;
        expect(rgbToHexColor('a', 1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, 'a')).to.be.undefined;
        expect(rgbToHexColor(1, 1, null)).to.be.undefined;
        expect(rgbToHexColor(1, null, 1)).to.be.undefined;
        expect(rgbToHexColor(null, 1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, undefined)).to.be.undefined;
        expect(rgbToHexColor(1, undefined, 1)).to.be.undefined;
        expect(rgbToHexColor(undefined, 1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, ()=>{})).to.be.undefined;
        expect(rgbToHexColor(1, ()=>{}, 1)).to.be.undefined;
        expect(rgbToHexColor(()=>{}, 1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, true)).to.be.undefined;
        expect(rgbToHexColor(1, true, 1)).to.be.undefined;
        expect(rgbToHexColor(true, 1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, false)).to.be.undefined;
        expect(rgbToHexColor(1, false, 1)).to.be.undefined;
        expect(rgbToHexColor(false, 1, 1)).to.be.undefined;
        
        
    });
    it('returns undefined if one of the values is under range', () => {
        
        expect(rgbToHexColor(-1, 1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, -1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, -1)).to.be.undefined;
    });
    it('returns undefined if one of the values is above range', () => {
        
        expect(rgbToHexColor(1, 1, 1000)).to.be.undefined;
        expect(rgbToHexColor(1, 1000, 1)).to.be.undefined;
        expect(rgbToHexColor(1000, 1, 1)).to.be.undefined;
    });
    it('Return the same color in hexadecimal format as a string ', () => {
        const [p1, p2, p3] = [0, 0, 0];
        expect(rgbToHexColor(p1, p2, p3)).to.be.equal('#000000');
    });
    it('Return the same color in hexadecimal format as a string', () => {
        const [p1, p2, p3] = [1, 1, 1];
        expect(rgbToHexColor(p1, p2, p3)).to.be.equal('#010101');
        expect(rgbToHexColor(0, 111, 255)).to.be.equal('#006FFF');
    });
    it('returns undefined if one of the values is an array', () => {
        
        expect(rgbToHexColor(1, [], 1)).to.be.undefined;
        expect(rgbToHexColor([], 1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, [])).to.be.undefined;
        expect(rgbToHexColor(1, [], [])).to.be.undefined;
        expect(rgbToHexColor([], [], [])).to.be.undefined;
    });
    it('returns undefined if one of the values is an obj', () => {
        
        expect(rgbToHexColor(1, { }, 1)).to.be.undefined;
        expect(rgbToHexColor({}, 1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, {})).to.be.undefined;
        expect(rgbToHexColor(1, {}, {})).to.be.undefined;
        expect(rgbToHexColor({}, {}, {})).to.be.undefined;
    });
});