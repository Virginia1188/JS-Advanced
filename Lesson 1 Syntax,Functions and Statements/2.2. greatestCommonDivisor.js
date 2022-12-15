function greatestCommonDivisor(numOne, numTwo) {
    let greatestDivisor = 0;
    for (let i = 0; i <= numTwo; i++) {
        if (numOne % i == 0 && numTwo % i == 0) {
            greatestDivisor = i;
        }
    }
    console.log(greatestDivisor);
}
greatestCommonDivisor(2154, 458);