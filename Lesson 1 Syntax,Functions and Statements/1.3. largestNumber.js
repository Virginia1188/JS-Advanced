function largestNumber(numOne, numTwo, numThree) {
    let result;
    if (numOne > numTwo && numOne > numThree) {
        result = numOne;
    } else if (numTwo > numOne && numTwo > numThree) {
        result = numTwo;
    } else {
        result = numThree;
    }
    console.log(`The largest number is ${result}.`);
}
largestNumber(5, -3, 16);