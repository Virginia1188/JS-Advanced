function argumentInfo(...input){
   
   let objCounters = {};

    input.forEach(element => {
        let type = typeof element;
        if (!objCounters[type]) {
            objCounters[type] = 0;
        }
        objCounters[type]++;
        console.log(`${type}: ${element}`);
    });

    Object.keys(objCounters)
    .sort((a,b) => objCounters[b] -objCounters[a])
    .forEach(key => console.log(`${key} = ${objCounters[key]}`));
    
}
argumentInfo({ name: 'bob'}, 3.333, 9.999);