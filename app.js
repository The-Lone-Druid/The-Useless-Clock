const timeString = document.querySelector('.time-string');
const rateMeModal = document.querySelector('.rate-please-modal');
const rateYes = document.querySelector('.rate-yes');
const rateNo = document.querySelector('.rate-no');
const rateCallToAction = document.querySelector('.rate-call-to-action');
const rateUsResponse = document.querySelector('.rate-us-response');

// updating time
function updateTime() {
    const time = new Date();

    let hours = time.getHours();
    let formattedHours = hours;
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian  = '';

    hours > 12 ? meridian = 'PM' : meridian = 'AM';

    formattedHours = twelveHourFormat(formattedHours);
    formattedHours = formatTime(formattedHours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    if(formattedHours == '00') {
        formattedHours = '12';
    }

    timeString.innerHTML = `${formattedHours} : ${minutes} : ${seconds} ${meridian}`;
}

window.setInterval(updateTime, 1000);
document.addEventListener('DOMContentLoaded', askForTheRatings);
rateYes.addEventListener('click', theResponseIsYes);
rateNo.addEventListener('click', theResponseIsNo)

// auxilary functions

function formatTime(time) {
    time < 10 ? time = '0' + time : time = time;
    return time;
}

function twelveHourFormat(hours) {
    return hours > 12 ? hours = hours - 12 : hours;
}

function askForTheRatings() {
    setTimeout(function() {
        rateMeModal.classList.remove('d-none');
    }, 2000);
}

function displayAllNone(time) {
    setTimeout(function() {
        rateMeModal.classList.add('d-none');
    }, time)
}

function theResponseIsYes() {
    rateCallToAction.classList.add('d-none');
    rateUsResponse.innerHTML = `
        <img class="h-100 w-100" src="assets/images/whos_awesome.png">
    `;
    displayAllNone(3000);
}

function theResponseIsNo() {
    rateCallToAction.classList.add('d-none');
    rateUsResponse.innerHTML = `
        <img class="h-100 w-100" src="https://i.redd.it/j88cgrihla161.jpg">
        <h2 class="mt-3">No regrets my friend.</h2>
    `;
    displayAllNone(3000);
}