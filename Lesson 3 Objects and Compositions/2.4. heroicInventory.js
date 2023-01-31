function heroicInventory(inputArr) {
    let result = [];
    let line = inputArr.shift();

    while (line != null) {
        let [name, level, items] = line.split(' / ');
        let allItems = items ? items.split(', ') : [];
        let newHero = {
            name,
            level: Number(level),
            items: allItems
        };

        result.push(newHero);
        line = inputArr.shift();
    }
    console.log(JSON.stringify(result));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);