function smallestTwoNumbers(array) {
    let sorted = array.sort((a, b) => a - b).slice(0, 2);
    console.log(sorted.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);