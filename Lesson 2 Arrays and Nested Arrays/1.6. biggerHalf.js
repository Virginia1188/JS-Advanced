function biggerHalf(array) {
    let arrMiddle = Math.floor(array.length / 2);
    let result = array
        .sort((a, b) => a - b)
        .slice(arrMiddle);
    return result;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);