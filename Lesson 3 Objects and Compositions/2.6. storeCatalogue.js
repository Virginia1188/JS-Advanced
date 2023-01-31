function storeCatalogue(inputArr) {
    inputArr.sort((a, b) => a.localeCompare(b));

    let result = {};
    let line = inputArr.shift();

    while (line != null) {
        let firstLetter = line[0];
        let [product,price] = line.split(' : ');
        price = Number(price);
        if (!result[firstLetter]) {
            result[firstLetter] = {};
        }
        result[firstLetter][product] = price;
        line = inputArr.shift();
    }
    for (const [letter, products] of Object.entries(result)) {
        console.log(letter);
        for (const product in products) {
            console.log(`  ${product}: ${products[product]}`);
        }
    } 
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);