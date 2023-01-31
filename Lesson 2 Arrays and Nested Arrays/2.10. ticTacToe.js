function ticTacToe(moves){
    let playBoard = 
    [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let index = 0;
    let currentMoves = moves.shift();
    while (currentMoves != null) {
        let [row, col] = currentMoves.split(' ');
        row = Number(row);
        col = Number(col);
        if(playBoard[row][col] === false){
            if(index % 2 === 0){
                playBoard[row][col] = 'X';
            }else{
                playBoard[row][col] = 'O';
            }
        }else{
            console.log('This place is already taken. Please choose another!');
            currentMoves = moves.shift();
            continue;
        }

        // if(arr[0] === arr)
        playBoard.forEach(arr => {
            let result = arr.every(val => val === arr[0]);
            if(result === true){
                arr[0] !== false ? console.log(`Player ${arr[0]} wins!`) : '';
            }
            
        });
        


        if(playBoard.includes(false) == false){
            console.log('The game ended! Nobody wins :(');
        }
        index++;
        currentMoves = moves.shift();
    }
}
ticTacToe(['0 1',
 '0 0',
 '0 2', 
 '2 0',
 '1 0',
 '1 1',
 '1 2',
 '2 2',
 '2 1',
 '0 0']);