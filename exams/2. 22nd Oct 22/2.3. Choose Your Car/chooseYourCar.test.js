const {expect} = require('chai');
const {it} = require('mocha');
const chooseYourCar = require('./chooseYourCar');

describe('chooseYourCar', ()=>{
    describe('choosingType', ()=>{
        it('invalid years',()=>{
            expect(()=>{
                chooseYourCar.choosingType('a','a',1111);
            }).to.throw('Invalid Year!');
            expect(()=>{
                chooseYourCar.choosingType('a','a',2222);
            }).to.throw('Invalid Year!');
        });
        it('incorect type',()=>{
            expect(()=>{
                chooseYourCar.choosingType('a','red',2000);
            }).to.throw('This type of car is not what you are looking for.');
        });
        it('to be picked',()=>{
            expect(chooseYourCar.choosingType('Sedan','red',2010)).to.equal('This red Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan','red',2015)).to.equal('This red Sedan meets the requirements, that you have.');
        });
        it('type is too old',()=>{
            expect(chooseYourCar.choosingType('Sedan','red',2009)).to.equal('This Sedan is too old for you, especially with that red color.');
            expect(chooseYourCar.choosingType('Sedan','red',1900)).to.equal('This Sedan is too old for you, especially with that red color.');
        });
        it('',()=>{

        });
    });
    describe('brandName', ()=>{
        it('removing indexes',()=>{
            expect(chooseYourCar.brandName(['a','b','c'],0)).to.equal('b, c');
            expect(chooseYourCar.brandName(['a','b','c'],1)).to.equal('a, c');
            expect(chooseYourCar.brandName(['a','b','c'],2)).to.equal('a, b');
        });
        it('brand is not an array',()=>{
            expect(()=>{
                chooseYourCar.brandName('abc',1);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.brandName('abc','a');
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.brandName([],1);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.brandName(123,1);
            }).to.throw('Invalid Information!');
        });
        it('if index is not correct',()=>{
            expect(()=>{
                chooseYourCar.brandName(['a','b','c'],-1);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.brandName(['a','b','c'],5);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.brandName(['a','b','c'],'1');
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.brandName(['a','b','c'],[]);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.brandName(['a','b','c'],[1]);
            }).to.throw('Invalid Information!');
            
        });
        it('',()=>{

        });
        it('',()=>{

        });
    });
    describe('CarFuelConsumption', ()=>{
        it('car is efficient',()=>{
            expect(chooseYourCar.carFuelConsumption(100,7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100,5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
        });
        it('car is not efficient',()=>{
            expect(chooseYourCar.carFuelConsumption(100,8)).to.equal('The car burns too much fuel - 8.00 liters!');
            expect(chooseYourCar.carFuelConsumption(100,10)).to.equal('The car burns too much fuel - 10.00 liters!');
        });
        it('validating distance',()=>{
            expect(()=>{
                chooseYourCar.carFuelConsumption('1',5);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.carFuelConsumption(-100,5);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.carFuelConsumption([100],5);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.carFuelConsumption([],5);
            }).to.throw('Invalid Information!');
        });
        it('validating fuels consumption',()=>{
            expect(()=>{
                chooseYourCar.carFuelConsumption(100,-5);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.carFuelConsumption(100,[5]);
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.carFuelConsumption(100,'5');
            }).to.throw('Invalid Information!');
            expect(()=>{
                chooseYourCar.carFuelConsumption(100,[]);
            }).to.throw('Invalid Information!');
        });
        it('',()=>{

        });
    });
});