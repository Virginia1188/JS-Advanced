class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;

    }

    sellCar(model, desiredMileage) {
        let findCar = this.availableCars.find(e => e.model === model);
        if (findCar == undefined) {
            throw Error(`${model} was not found!`);
        }

        let mileageDif = findCar.mileage - desiredMileage;
        let soldPrice = 0;

        if (findCar.mileage <= desiredMileage) {
            soldPrice = findCar.price;
        } else if (mileageDif <= 40000) {
            soldPrice = findCar.price * 0.95;
        } else {
            soldPrice = findCar.price * 0.9;
        }

        let index = this.availableCars.indexOf(findCar);
        let removed = this.availableCars.slice(index, 1);
        let { horsepower, price, mileage } = findCar;
        this.soldCars.push({ model, horsepower, soldPrice });
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;

    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }
        let result = ['-Available cars:'];
        this.availableCars.forEach(c => {
            result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        });
        return result.join('\n');
    }

    salesReport(criteria) {

        if (criteria === 'horsepower' || criteria === 'model') {
            let sorted;
            if (criteria === 'horsepower') {
                sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
            } else if (criteria === 'model') {
                sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
            }
            let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`];
            this.soldCars.forEach(c => {
                result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
            });
            return result.join('\n');
        }else{
            throw Error('Invalid criteria!');
        }
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));




