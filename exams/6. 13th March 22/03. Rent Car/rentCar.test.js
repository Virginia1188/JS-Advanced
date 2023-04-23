const {expect} = require('chai');
const {it} = require('mocha');
const rentCar = require('./rentCar');

describe('rentCar tests', function() {
    describe('searchCar', function() {
        it('finding the model', function() {
            expect(rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'BMW')).to.equal('There is 1 car of model BMW in the catalog!');
        });
        it('validating arr', function() {
            expect(()=>{
                rentCar.searchCar(1,'BMW');
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.searchCar('BMW','BMW');
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.searchCar({},'BMW');
            }).to.throw('Invalid input!');
        });
        it('validating string', function() {
            expect(()=>{
                rentCar.searchCar([],[]);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.searchCar([],1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.searchCar([],{});
            }).to.throw('Invalid input!');
        });
        it('no models ', function() {
            expect(()=>{
                rentCar.searchCar(['Volkswagen', 'Audi'], 'BMW');
            }).to.throw('There are no such models in the catalog!');
        });
     });

     describe('calculatePriceOfCar', function() {
        it('validating input', function() {
            expect(()=>{
                rentCar.calculatePriceOfCar(1,1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.calculatePriceOfCar('1','1');
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.calculatePriceOfCar([1],1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.calculatePriceOfCar('1',[1]);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.calculatePriceOfCar(null,1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.calculatePriceOfCar('1',null);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.calculatePriceOfCar(undefined,1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.calculatePriceOfCar('1',undefined);
            }).to.throw('Invalid input!');
        });
        it('calculating price', function() {
            expect(rentCar.calculatePriceOfCar('BMW',1)).to.equal('You choose BMW and it will cost $45!');
            expect(rentCar.calculatePriceOfCar('Audi',10)).to.equal('You choose Audi and it will cost $360!');
        });
        it('no such model', function() {
            expect(()=>{
                rentCar.calculatePriceOfCar('',1);
            }).to.throw('No such model in the catalog!');
            expect(()=>{
                rentCar.calculatePriceOfCar('Caravan',1);
            }).to.throw('No such model in the catalog!');
        });
     });

     describe('checkBudget', function() {
        it('validating input', function() {
            expect(()=>{
                rentCar.checkBudget('1',1,1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget(1,'1',1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget(1,1,'1');
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget([],1,1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget(1,[],1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget(1,1,[]);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget({},1,1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget(1,{},1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget(1,1,{});
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget(null,1,1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget(1,null,1);
            }).to.throw('Invalid input!');
            expect(()=>{
                rentCar.checkBudget(1,1,null);
            }).to.throw('Invalid input!');
        });
        it('if budget is bigger or equal to cost', function() {
            expect(rentCar.checkBudget(1,1,2)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(1,1,1)).to.equal('You rent a car!');
        });
        it('if budget is below cost', function() {
            expect(rentCar.checkBudget(10,1,5)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(6,1,5)).to.equal('You need a bigger budget!');
        });
     });
     
});
