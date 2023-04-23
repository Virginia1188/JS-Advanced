const {expect} = require('chai');
const {it} = require('mocha');
const library = require('./library');

describe('library tests', function() {
    describe('calcPriceOfBook', function() {
        it('price with 50% discout', function() {
            expect(library.calcPriceOfBook('a',1980)).to.equal('Price of a is 10.00');
            expect(library.calcPriceOfBook('a',1979)).to.equal('Price of a is 10.00');
        });
        it('without discount', function() {
            expect(library.calcPriceOfBook('a',2022)).to.equal('Price of a is 20.00');
            expect(library.calcPriceOfBook('a',2040)).to.equal('Price of a is 20.00');
        });
        it('validating input', function() {
            expect(()=>{
                library.calcPriceOfBook('','');
            }).to.throw('Invalid input');
            expect(()=>{
                library.calcPriceOfBook(1,1);
            }).to.throw('Invalid input');
            expect(()=>{
                library.calcPriceOfBook(['1'],1);
            }).to.throw('Invalid input');
            expect(()=>{
                library.calcPriceOfBook('',[1]);
            }).to.throw('Invalid input');
            expect(()=>{
                library.calcPriceOfBook([],[]);
            }).to.throw('Invalid input');
            expect(()=>{
                library.calcPriceOfBook({},{});
            }).to.throw('Invalid input');

            expect(()=>{
                library.calcPriceOfBook('',null);
            }).to.throw('Invalid input');
            expect(()=>{
                library.calcPriceOfBook(null,1);
            }).to.throw('Invalid input');
        });
     });

     describe('findBook', function() {
        it('no books available', function() {
            expect(()=>{
                library.findBook([],'Troy');
            }).to.throw('No books currently available');
        });
        it('found the book', function() {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'],'Troy')).to.equal('We found the book you want.');
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'],'Life Style')).to.equal('We found the book you want.');
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'],'Torronto')).to.equal('We found the book you want.');
        });
        it('not found', function() {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'],'a')).to.equal('The book you are looking for is not here!');
        });
     });

     describe('arrangeTheBooks', function() {
        it('validating the input', function() {
            expect(()=>{
                library.arrangeTheBooks('1');
            }).to.throw('Invalid input');
            expect(()=>{
                library.arrangeTheBooks(-1);
            }).to.throw('Invalid input');
            expect(()=>{
                library.arrangeTheBooks([1]);
            }).to.throw('Invalid input');
            expect(()=>{
                library.arrangeTheBooks([]);
            }).to.throw('Invalid input');
            expect(()=>{
                library.arrangeTheBooks(null);
            }).to.throw('Invalid input');
            expect(()=>{
                library.arrangeTheBooks(undefined);
            }).to.throw('Invalid input');
        });
        it('arranged', function() {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
        });
        it('not arrange', function() {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
     });
     
});
