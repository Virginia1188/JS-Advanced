function cityRecord(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
    };
    console.log(city);
    return city;
}
cityRecord('Tortuga',
    7000,
    15000
);