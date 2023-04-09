function juiceBottles(arrOfStr) {
    let juiceBtls = {};
    let leftJuice = {};

    arrOfStr.forEach(line => {
        let [juice, qnt] = line.split(' => ');
        qnt = Number(qnt);
        if (!leftJuice.hasOwnProperty(juice)) {
            leftJuice[juice] = qnt;
        } else {
            leftJuice[juice] += qnt;
        }

        if (leftJuice[juice] >= 1000) {
            if (!juiceBtls.hasOwnProperty(juice)) {
                juiceBtls[juice] = Math.floor(leftJuice[juice] / 1000);
            } else {
                juiceBtls[juice] += Math.floor(leftJuice[juice] / 1000);
            }
        }

            leftJuice[juice] = leftJuice[juice] % 1000;
        });

    for (const [juice, bottles] of Object.entries(juiceBtls)) {
        console.log(`${juice} => ${bottles}`);
    }

}
juiceBottles(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
// Orange => 2
// Peach => 2

juiceBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);
// Pear => 8
// Watermelon => 10
// Kiwi => 4
