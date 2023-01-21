function sumFirstLast(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    let result = first + last;
    // console.log(result);
    return result;
}
sumFirstLast(['20', '30', '40']);