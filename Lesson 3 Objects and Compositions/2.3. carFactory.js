function carFactory(order) {
    let car = {
        model: order.model,
        engine: {},
        carriage: { type: order.carriage, color: order.color },
        wheels: [],
    };
    if (order.power <= 90 && order.power < 120) {
        car.engine = { power: 90, volume: 1800 };
    } else if (order.power >= 120 && order.power < 200) {
        car.engine = { power: 120, volume: 2400 };
    } else if (order.power >= 200) {
        car.engine = { power: 200, volume: 3500 };
    }

    if (order.wheelsize % 2 == 0) {
        let currentWheelsize = order.wheelsize - 1;
        car.wheels = Array(4).fill(currentWheelsize);
    } else {
        car.wheels = Array(4).fill(order.wheelsize);
    }

    return car;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);