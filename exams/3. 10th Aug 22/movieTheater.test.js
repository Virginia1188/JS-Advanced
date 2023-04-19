const {expect} = require('chai');
const {it} = require('mocha');
const movieTheater = require('./3.3. Movie Theater Resources');

describe('Tests for movie theater', function() {
    describe('ageRestrictions ', function() {

        it('rating G', function() {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        });
        it('rating PG', function() {
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        });
        it('rating R', function() {
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        });
        it('rating NC-17', function() {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        });
        it('no restrictions', function() {
            expect(movieTheater.ageRestrictions('p')).to.equal('There are no age restrictions for this movie');
        });
        it('no restrictions', function() {
            expect(movieTheater.ageRestrictions('D')).to.equal('There are no age restrictions for this movie');
        });
     });
     describe('moneySpent ', function() {

        it('cost with discount', function() {
            expect(movieTheater.moneySpent(4,['Nachos'],['Soda'])).to.equal('The total cost for the purchase with applied discount is 54.80');
        });
        it('cost without discount', function() {
            expect(movieTheater.moneySpent(1,['Nachos'],['Soda'])).to.equal('The total cost for the purchase is 23.50');
        });
        it('validating tickets', function() {
            expect(()=>{
                movieTheater.moneySpent('1',['Nachos'],['Soda']);
            }).to.throw('Invalid input');
            expect(()=>{
                movieTheater.moneySpent([1],['Nachos'],['Soda']);
            }).to.throw('Invalid input');
            expect(()=>{
                movieTheater.moneySpent([],['Nachos'],['Soda']);
            }).to.throw('Invalid input');
            expect(()=>{
                movieTheater.moneySpent('',['Nachos'],['Soda']);
            }).to.throw('Invalid input');
            
        });
        it('validating food', function() {
            expect(()=>{
                movieTheater.moneySpent(1,'Nachos',['Soda']);
            }).to.throw('Invalid input');
            expect(()=>{
                movieTheater.moneySpent(1,1,['Soda']);
            }).to.throw('Invalid input');
        });
        it('validating drinks', function() {
            expect(()=>{
                movieTheater.moneySpent(1,['Nachos'],'Soda');
            }).to.throw('Invalid input');
            expect(()=>{
                movieTheater.moneySpent(1,['Nachos'],1);
            }).to.throw('Invalid input');
        });
     });
     describe('reservation', function() {

        it('needed seats', function() {
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats:1},{rowNumber: 2, freeSeats:3},{rowNumber: 3, freeSeats: 5}],1)).to.equal(3);
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats:1},{rowNumber: 2, freeSeats:3},{rowNumber: 3, freeSeats: 7}],5)).to.equal(3);
        });
        it('validate the array', function() {
            expect(()=>{
                movieTheater.reservation({rowNumber: 3, freeSeats: 7},1);
            }).to.throw('Invalid input');
            expect(()=>{
                movieTheater.reservation('[{rowNumber: 3, freeSeats: 7}]',1);
            }).to.throw('Invalid input');
            expect(()=>{
                movieTheater.reservation(1,1);
            }).to.throw('Invalid input');
        });
        it('validateing the count', function() {
            expect(()=>{
                movieTheater.reservation([],'1');
            }).to.throw('Invalid input');
            expect(()=>{
                movieTheater.reservation([],[]);
            }).to.throw('Invalid input');
            expect(()=>{
                movieTheater.reservation([],[1]);
            }).to.throw('Invalid input');
        });
        
     });

     
});
