function circleArea(argument) {
    let type = typeof (argument);
    let area = 0;
    if (type == 'number') {
        area = Math.pow(argument, 2) * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
circleArea('name');