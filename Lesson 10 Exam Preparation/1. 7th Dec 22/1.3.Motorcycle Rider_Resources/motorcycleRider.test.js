const {expect} = require('chai');
const {it} = require('mocha');
const motorcycleRider = require('./Motorcycle Rider');

describe('motorcycleRider', ()=>{
    describe('licenseRestriction', ()=>{
        it('Category AM',()=>{
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });
        it('Category A1',()=>{
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });
        it('Category A2',()=>{
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });
        it('Category A',()=>{
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
        it('Wrong category',()=>{
            expect(()=>{
                motorcycleRider.licenseRestriction('B');}).to.throw('Invalid Information!');
        });
        // do i need more tests for invalid category
    });

    describe('motorcycleShowroom', ()=>{
        it('no matches',()=>{
            expect(motorcycleRider.motorcycleShowroom(['125','250','600'],50)).to.equal('There are 0 available motorcycles matching your criteria!');
        });
        it('having matches',()=>{
            expect(motorcycleRider.motorcycleShowroom(['125','250','600'],550)).to.equal('There are 2 available motorcycles matching your criteria!');
        });
        it('when there is one match',()=>{
            expect(motorcycleRider.motorcycleShowroom(['125','250','600'],125)).to.equal('There are 1 available motorcycles matching your criteria!');
        });
        it('invalid params',()=>{
            expect(()=>{
                motorcycleRider.motorcycleShowroom([],1);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.motorcycleShowroom('125',5);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.motorcycleShowroom(['125','250','600'],49);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.motorcycleShowroom(['125','250','600'],'600');
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.motorcycleShowroom([125,250,600],49);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.motorcycleShowroom(['125','250','600'],[50]);
            }).to.throw('Invalid Information!');
        });
        // it('',()=>{

        // });
    });
    describe('otherSpendings', ()=>{
    
        it('equipment is not an array',()=>{
            expect(()=>{
                motorcycleRider.otherSpendings('abv','a',true);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.otherSpendings(1,'a',true);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.otherSpendings([],'a',true);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.otherSpendings(1,1,true);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.otherSpendings('a','a',true);
            }).to.throw('Invalid Information!');
            
        });
        it('consumables not an array',()=>{
            expect(()=>{
                motorcycleRider.otherSpendings(['a','b'],'a',true);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.otherSpendings(['a','b'],2,true);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.otherSpendings([],'[]',true);
            }).to.throw('Invalid Information!');
        });
        it('discount is not true or false',()=>{
            expect(()=>{
                motorcycleRider.otherSpendings(['a','b'],['a'],1);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.otherSpendings(['a','b'],'a','true');
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.otherSpendings(['a','b'],'a',['true']);
            }).to.throw('Invalid Information!');
            expect(()=>{
                motorcycleRider.otherSpendings(['a','b'],'a',[true]);
            }).to.throw('Invalid Information!');
        });
        it('discount false',()=>{
            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'],false)).to.equal('You spend $270.00 for equipment and consumables!');
        });
        it('discount true',()=>{
            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'],true)).to.equal('You spend $243.00 for equipment and consumables with 10% discount!');
        });
    });
});