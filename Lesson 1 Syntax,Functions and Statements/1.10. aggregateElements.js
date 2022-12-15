function aggregateElements(array) {
    let sum = array.reduce((a, b) => a + b);
    let inverseSum = array.map((x) => 1 / x).reduce((a, b) => a + b);

    console.log(sum);
    console.log(inverseSum);
    console.log(array.join(''));
}
aggregateElements([2, 4, 8, 16]);