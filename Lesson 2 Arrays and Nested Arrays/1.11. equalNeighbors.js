function equalNeighbors(matrix) {
    let numOfPair = 0;
    for (let i = 0; i < matrix.length - 1; i++) {
        let index = 0;
        const arrayTwo = matrix[i + 1];
        const arrayOne = matrix[i];
        arrayOne.forEach(element => {
            element === arrayTwo[index] ? numOfPair++ : 0;
            index++;
        });
    }
    matrix.forEach(array => {
        let index = 1;
        array.forEach(element => {
            element === array[index] ? numOfPair++ : 0;
            index++;
        });
    });
    console.log(numOfPair);
}
equalNeighbors(
    [['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]

);