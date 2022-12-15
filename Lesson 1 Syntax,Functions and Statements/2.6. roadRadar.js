function roadRadar(speed, area) {
    let limit = false;
    let difference = 0;
    let speedLimit = 0;
    let status;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            if (speed > 130) {
                difference = speed - 130;
            } else {
                limit = true;
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed > 90) {
                difference = speed - 90;
            } else {
                limit = true;
            }
            break;
        case 'city':
            speedLimit = 50;
            if (speed > 50) {
                difference = speed - 50;
            } else {
                limit = true;
            }
            break;
        case 'residential':
            speedLimit = 20;
            if (speed > 20) {
                difference = speed - 20;
            } else {
                limit = true;
            }
            break;
    }
    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40 && difference >= 20) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }
    if (limit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
roadRadar(120, 'interstate');