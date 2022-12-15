function stringLength(argmOne, argmTwo, argmThree) {
    let lengthSum = argmOne.length + argmTwo.length + argmThree.length;
    let average = Math.floor(lengthSum / 3);
    console.log(lengthSum);
    console.log(average);
}
stringLength('chocolate', 'ice cream', 'cake');