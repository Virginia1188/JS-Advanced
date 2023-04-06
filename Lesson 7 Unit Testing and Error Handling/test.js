const { expect, assert } = require('chai');

function sum(a, b) {
    return a + b;
}

describe('main test', function () {
    // before();
    // after();
    // beforeEach();
    // afterEach();
    it('works', function () {
        expect(sum(3, 5)).to.equal(8);
    });
    it('works or not', function () {
        expect(sum(0.1, 0.2)).to.equal(0.3);
        // assert.equal(sum(0.1,0.2),0.3);
    });
});