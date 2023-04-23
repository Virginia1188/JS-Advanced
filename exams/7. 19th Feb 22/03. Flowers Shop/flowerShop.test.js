const { expect } = require('chai');
const { it } = require('mocha');
const flowerShop = require('./flowerShop');

describe('flowerShop', function () {
    describe('calcPriceOfFlowers', function () {
        it('returns the multiplied price and qnt', function () {
            expect(flowerShop.calcPriceOfFlowers('F', 10, 2)).to.equal('You need $20.00 to buy F!');
        });
        it('validating input', function () {
            expect(() => {
                flowerShop.calcPriceOfFlowers(1, 1, 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers('1', '1', 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers('1', 1, '1');
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers([], 1, 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers('1', [], 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers('1', 1, []);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers({}, 1, 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers('1', {}, 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers('1', 1, {});
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers(null, 1, 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers('1', null, 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers('1', 1, null);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers([], [], []);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.calcPriceOfFlowers('1', '1', '1');
            }).to.throw('Invalid input!');

        });
        it('', function () {

        });
    });

    describe('checkFlowersAvailable', function () {
        it('available ', function () {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid'])).to.equal('The Rose are available!');
        });
        it('not available', function () {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Lily', 'Orchid'])).to.equal('The Rose are sold! You need to purchase more!');
        });
        it('', function () {

        });
    });

    describe('sellFlowers', function () {
        it('removing flowers', function () {
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 0)).to.equal('Lily / Orchid');
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1)).to.equal('Rose / Orchid');
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2)).to.equal('Rose / Lily');
        });
        it('validating input', function () {
            expect(() => {
                flowerShop.sellFlowers([], 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.sellFlowers(1, 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.sellFlowers('1', 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.sellFlowers(['R'], 1);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], '1');
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], ['1']);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], []);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], [1]);
            }).to.throw('Invalid input!');
            expect(() => {
                flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], null);
            }).to.throw('Invalid input!');
        });
        it('', function () {

        });
    });

});
