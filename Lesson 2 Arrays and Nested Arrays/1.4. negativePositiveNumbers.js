function negativPositiveNumbers(inputArr) {
    let resultArr = [];
    for (const num of inputArr) {
        num < 0 ? resultArr.unshift(num) : resultArr.push(num);
    }
    console.log(resultArr.join('\n'));
}
negativPositiveNumbers([7, -2, 8, 9]);