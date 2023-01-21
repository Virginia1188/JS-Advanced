function biggestElement(arrOfArr) {
    let max = [];
    for (const arr of arrOfArr) {
        let currentBiggest = Math.max(...arr);
        max.push(currentBiggest);
    }
    let result = Math.max(...max);
    return result;
}