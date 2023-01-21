function biggestElement(arrOfArr) {
    let max = [];
    for (const arr of arrOfArr) {
        let currentBiggest = Math.max(...arr);
        max.push(currentBiggest);
    }
    let result = Math.max(...max);
    return result;
}
biggestElement([[20, 50, 10],
[8, 33, 145]]);