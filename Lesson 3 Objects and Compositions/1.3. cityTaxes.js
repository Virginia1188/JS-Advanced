function cityTaxes(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += Math.floor(this.population * this.taxRate);
            return treasury;
        },
        applyGrowth: function (percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
            return population;
        },
        applyRecession: function (percentage) {
            this.treasury -= Math.floor(this.treasury * (percentage / 100));
            return treasury;
        }
    };
return city;

}
cityTaxes('Tortuga',
    7000,
    15000);