function attachEventsListeners() {

    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const dayBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');
    dayBtn.addEventListener('click', function () {
        let inputDays = Number(days.value);
        hours.value = inputDays * 24;
        minutes.value = inputDays * 1440;
        seconds.value = inputDays * 24 * 60 * 60;
    });
    hoursBtn.addEventListener('click', function () {
        let inputHours = Number(hours.value);
        days.value = inputHours / 24;
        minutes.value = inputHours * 60;
        seconds.value = inputHours * 60 * 60;
    });
    minutesBtn.addEventListener('click', function () {
        let inputMin = Number(minutes.value);
        days.value = inputMin / 60 / 24;
        hours.value = inputMin / 60;
        seconds.value = inputMin * 60;
    });
    secondsBtn.addEventListener('click', function () {
        let inputSec = Number(seconds.value);
        days.value = inputSec / 60 / 60 / 24;
        hours.value = inputSec / 60 / 60;
        minutes.value = inputSec / 60;
    });

}
