class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];

    }
    addBook (bookName, bookAuthor){
        if(this.capacity == 0){
            throw Error('Not enough space in the collection.');
        }
        this.books.push({bookName, bookAuthor, payed: false});
        this.capacity --;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook( bookName ) {
        let foundBook = this.books.find(b => b.bookName == bookName);
        if(foundBook == undefined){
            throw Error(`${bookName} is not in the collection.`);
        }else if(foundBook.payed == true){
            throw Error(`${bookName} has already been paid.`);
        }else{
            foundBook.payed = true;
            return `${bookName} has been successfully paid.`;
        }
    }

    removeBook(bookName) {
        let index = this.books.map(b => b.bookName ).indexOf(bookName);
        if(index == -1){
            throw Error('The book, you\'re looking for, is not found.');
        }else if(this.books[index].payed == false){
            throw Error(`${bookName} need to be paid before removing from the collection.`);
        }else{
            this.books.slice(index, 1);
            return `${bookName} remove from the collection.`;
        }
    }

    getStatistics(bookAuthor){

        if(bookAuthor == undefined){
            let result = [`The book collection has ${ this.capacity } empty spots left.`];
            let sorted = this.books.sort((a,b)=> a.bookName.localeCompare(b.bookName)).forEach(b =>{
                let paid = '';
                b.payed == true ? paid = 'Has Paid' : paid = 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });
            return result.join('\n');
        }else{
            let found = this.books.find(b=> b.bookAuthor == bookAuthor);
            if(found != undefined){
                let paid = '';
                found.payed == true ? paid = 'Has Paid' : paid = 'Not Paid';
                return `${found.bookName} == ${found.bookAuthor} - ${paid}.`;
            }else{
                throw Error(`${bookAuthor} is not in the collection.`);
            }
        }

    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




