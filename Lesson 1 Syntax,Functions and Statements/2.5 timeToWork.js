function timeToWork(steps, footprint, speed) {
    let distance = steps * footprint;
    let breaks = Math.floor(distance / 500);
    let time = ((distance / ((speed * 1000)) * 60)) + breaks;

    function time_convert(num) {

        let hours = Math.floor(num / 60);
        let minutes = Math.floor(num);
        let seconds = Math.ceil((num * 60) % 60);
        if (hours < 10) {
            hours = '0' + (Math.floor(num / 60));
        }
        if (minutes < 9) {
            minutes = '0' + (Math.floor(num));
        }
        if (seconds < 9) {
            seconds = '0' + (Math.ceil((num * 60) % 60));
        }
        let result = `${hours}:${minutes}:${seconds}`;
        return result;
    }
    console.log(time_convert(time));

}
timeToWork(2564, 0.70, 5.5);