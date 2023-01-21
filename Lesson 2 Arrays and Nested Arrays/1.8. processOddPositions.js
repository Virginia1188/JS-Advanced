function processOddPositions(arr) {
    let result = arr
        .filter((el, i) => i % 2 == 1)
        .map((x) => x * 2)
        .reverse();
    return result;
}
processOddPositions([10, 15, 20, 25]);