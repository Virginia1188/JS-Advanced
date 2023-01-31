function lowestpriceInCities(inputArr) {
    let result = {};
    let line = inputArr.shift();

    while (line != null) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!result[product]) {
            result[product] = { town, price, };
        }
        if (result[product].price > price) {
            result[product].price = price;
            result[product].town = town;
        }

        line = inputArr.shift(' | ');
    }
    for (const [product, obj] of Object.entries(result)) {
        console.log(`${product} -> ${obj.price} (${obj.town})`);
    }
}
lowestpriceInCities(
    ['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'Mexico City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Washington City | Mercedes | 1000']
);