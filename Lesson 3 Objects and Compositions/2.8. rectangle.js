function rectangle(width,height,color){
    let toUpper = color[0].toUpperCase();
    const remainingChar = color.slice(1);
    const finalColor = toUpper + remainingChar;
    // console.log(finalColor);
    const rect = {
        width,
        height,
        color: finalColor,
        calcArea(width,height) {
            const sum = Number(this.width) * Number(this.height);
            return sum;
        }
    };
    return rect;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
