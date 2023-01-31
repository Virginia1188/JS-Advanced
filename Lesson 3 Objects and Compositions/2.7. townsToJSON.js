function townsToJSON(inputArr) {
    let result = [];
    let line = inputArr.shift();
    line = inputArr.shift();
    while (line != null) {
        let regExp = /\s?\|\s?/g;
        let [town, latititude, longitude] = line
            .split(regExp)
            .filter(x => x != ''); 
        latititude = Number(latititude);
        longitude = Number(longitude);
        let newTown = {
            'Town': town,
            'Latitude': Number(latititude.toFixed(2)),
            'Longitude': Number(longitude.toFixed(2))
        };
        result.push(newTown);
        line = inputArr.shift();
    }
    console.log(JSON.stringify(result));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);