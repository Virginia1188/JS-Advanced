function solve(arr, startIndex, endIndex) {
    let numArr = arr.map(e => Number(e));
    if (!Array.isArray(arr)) {
        console.log(NaN);
        return NaN;
    }
    // if(numArr.includes(NaN)){
    //     console.log(NaN);
    //     return NaN;
    // }

    let start = Math.max(startIndex, 0);

    let end = Math.min(endIndex, arr.length - 1);
    if (endIndex < 0) {
        end = arr.length - 1;
    }

    let subNums = numArr.slice(start, end + 1);
    let sum = subNums.reduce((a, b) => a + b, 0);
    console.log(sum);
    return sum;
}
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);