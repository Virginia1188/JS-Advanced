function fruit(fruit, weight, priceKg) {
    let weightInKg = (weight / 1000);
    let result = priceKg * weightInKg;
    console.log(`I need $${result.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);