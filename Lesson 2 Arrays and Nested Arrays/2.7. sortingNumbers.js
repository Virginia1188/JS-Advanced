function sortingNumbers(arrOfNums) {
    let result = [];
    const length = arrOfNums.length;
    const sorted = arrOfNums.sort((a,b) => a -b);
    while (result.length < length) {
            result.push(sorted.shift());
            result.push(sorted.pop());
        }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);