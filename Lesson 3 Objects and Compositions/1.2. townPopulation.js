function townPopulation(arr) {
    let towns = {};
    for (const element of arr) {
        let [town, population] = element.split(' <-> ');
        if (towns.hasOwnProperty(town)) {
            towns[town] += Number(population);
            continue;
        }
        towns[town] = Number(population);
    }
    for (const [town, population] of Object.entries(towns)) {
        console.log(town + ' : ' + population);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

);