const {expect} = require('chai');
const {it} = require('mocha');
const carService = require('./4.3. Car Service Resources');

describe('carService tests', function() {
    describe('isItExpensive', function() {

        it('Engine', function() {
           expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
           

        });
        it('dif input', function() {
            expect(carService.isItExpensive('fuel')).to.equal('The overall price will be a bit cheaper');
        });
        it('Transmission', function() {
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });
        
     });
     describe('discount', function() {

        it('15% discount', function() {
        expect(carService.discount(3,100)).to.equal('Discount applied! You saved 15$');
        expect(carService.discount(7,100)).to.equal('Discount applied! You saved 15$');
        });
        it('30% discount', function() {
            expect(carService.discount(8,100)).to.equal('Discount applied! You saved 30$');
            expect(carService.discount(18,100)).to.equal('Discount applied! You saved 30$');
        });
        it('no discount', function() {
            expect(carService.discount(2,100)).to.equal('You cannot apply a discount');
            expect(carService.discount(1,100)).to.equal('You cannot apply a discount');
        });
        it('validating input', function() {
            expect(()=>{
                carService.discount('1',1);
            }).to.throw('Invalid input');
            expect(()=>{
                carService.discount([],1);
            }).to.throw('Invalid input');
            expect(()=>{
                carService.discount([1],1);
            }).to.throw('Invalid input');
            expect(()=>{
                carService.discount(1,'1');
            }).to.throw('Invalid input');
            expect(()=>{
                carService.discount(1,[]);
            }).to.throw('Invalid input');
            expect(()=>{
                carService.discount('1','1');
            }).to.throw('Invalid input');
            expect(()=>{
                carService.discount([],[]);
            }).to.throw('Invalid input');
        });
     });
     describe('partsToBuy', function() {

        it('calculating price', function() {
            let catalog = [
                { part: 'blowoff valve', price: 145 },
                { part: 'coil springs', price: 230 },
              ];
            let needed = ['blowoff valve', 'injectors'];
           expect(carService.partsToBuy(catalog,needed)).to.equal(145);
        });
        it('if parts is empty', function() {
            let catalog = [{ part: "a", price: 1 }, { part: "b", price: 1 }];
            let needed = [];
           expect(carService.partsToBuy(catalog,needed)).to.equal(0);
        });
        it('if catalog is empty', function() {
            let catalog = [];
            let needed = ['a'];
           expect(carService.partsToBuy(catalog,needed)).to.equal(0);
        });
        it('if both are empty', function() {
            let catalog = [];
            let needed = [];
           expect(carService.partsToBuy(catalog,needed)).to.equal(0);
        });
        it('validating input', function() {
          
           expect(()=>{
            carService.partsToBuy('a',[]);
           }).to.throw('Invalid input');
           expect(()=>{
            carService.partsToBuy(1,[]);
           }).to.throw('Invalid input');
           expect(()=>{
            carService.partsToBuy([],'a');
           }).to.throw('Invalid input');
           expect(()=>{
            carService.partsToBuy([],1);
           }).to.throw('Invalid input');
         
        });
     });

   
});
