const hoursEl = document.getElementById('hour');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function digitalClock() {
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = 'AM';

    if (hr >= 12) {
        ampm = 'PM';
        if (hr > 12) {
            hr -= 12;
        }
    }

    // Adjust for midnight
    if (hr === 0) {
        hr = 12;
    }

    hr = hr < 10 ? '0' + hr : hr;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    hoursEl.innerText = hr;
    minutesEl.innerText = min;
    secondsEl.innerText = sec;
    ampmEl.innerText = ampm;

    setTimeout(digitalClock, 1000);
}

digitalClock();
