function listOfNames(arrOfNames) {
    let sorted = arrOfNames.sort((a, b) => a.localeCompare(b));
    let num = 1;
    sorted.forEach(element => {
        console.log(`${num}.${element}`);
        num++;
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);