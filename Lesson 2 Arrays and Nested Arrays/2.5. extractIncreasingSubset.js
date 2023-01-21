function extractIncreasingSubset(arr) {
    let result = [];
    let currentBiggest = 0;
    arr.forEach(element => {
        if (element >= currentBiggest) {
            result.push(element);
            currentBiggest = element;
        }
    });
    return result;
}
extractIncreasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);