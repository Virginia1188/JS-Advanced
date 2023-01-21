function magicMatrices(matrix) {
    let rowSum  =  matrix[0].reduce((a,b) => a+b);
    let index = 0;
    for (const row of matrix) {
        let currentSum = row.reduce((a,b) => a+b);
        if(currentSum != rowSum){
            rowSum = currentSum;
            return console.log('false');
        }
    };
    while (index < matrix[0].length) {
        let colSum = 0;
        
        matrix.forEach(element => {
            colSum += element[index];
        });
        if(colSum != rowSum){
            return console.log('false'); 
        }
        index++;
    }
console.log('true');
}
magicMatrices
    ([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrices
    ([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);