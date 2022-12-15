function sameNumbers(num) {
    let arr = num
        .toString()
        .split('');
    let check = arr.every(element => {
        if (element === arr[0]) {
            return true;
        }
    });
    let sum = arr.reduce((a, b) => Number(a) + Number(b));
    console.log(check);
    console.log(sum);
}
sameNumbers(2222222);