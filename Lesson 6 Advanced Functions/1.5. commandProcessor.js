function solution() {
    let result ='';
    return {

        append(newStr) {result += newStr;},
        removeStart(n) { result =  result.slice(n);},
        removeEnd(n) { result = result.slice(0, result.length - n);},
        print() { console.log(result);}

    };
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
