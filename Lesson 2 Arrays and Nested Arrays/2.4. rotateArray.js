function rotateArray(arr, rotations) {
    let result = arr.slice();
    for (let i = 0; i < rotations; i++) {
        let element = result.pop();
        result.unshift(element);
    }
    console.log(result.join(' '));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15

);