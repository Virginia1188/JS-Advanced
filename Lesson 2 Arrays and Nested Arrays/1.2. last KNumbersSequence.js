function lastKNumbersSequence(numOne, numTwo) {
    let resultArr = [1];
    let n = numOne;
    let k = numTwo;
    while (resultArr.length < n) {
        let currentArr;
        if (resultArr.length - k < 0) {
            currentArr = resultArr.slice(0, resultArr.length);
        } else {
            currentArr = resultArr.slice(resultArr.length - k, resultArr.length);
        }
        let sum = currentArr.reduce((a, b) => a + b);
        resultArr.push(sum);
    }
    // console.log(resultArr);
    return resultArr;
}
lastKNumbersSequence(8, 2);