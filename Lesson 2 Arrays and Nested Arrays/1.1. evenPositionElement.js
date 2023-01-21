function evenPositionElement(array) {
    let arrLength = array.length;
    let resultArr = [];
    for (let i = 0; i < arrLength; i++) {
        const element = array[i];
        i % 2 == 0 ? resultArr.push(element) : 0;
    }
    console.log(resultArr.join(' '));
}
evenPositionElement(['5', '10']);