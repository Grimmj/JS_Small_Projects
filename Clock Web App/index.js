let timeFormat = 0;
let reformattedHours;
let midDayIndicator;
let offsetID;
let displayedTimeZone;
let timeZones = {
    tz1: 1,
    tz2: 1,
    tz3: 0,
    tz4: -1,
    tz5: -2,
    tz6: -3,
    tz7: -4,
    tz8: -8
}

function updateTime() {
    let currentTime = new Date();
    offsetTime();
    let displayHours = currentTime.getHours() + timeZones[offsetID];
    if (timeFormat === 0) {
        reformattedHours = displayHours;
        midDayIndicator = '';
    }
    else {
        reformattedHours = (displayHours > 12) ? displayHours - 12 : displayHours;
        midDayIndicator = (displayHours > 12) ? " PM" : " AM";
    }
    let displayTime = `${leadingZeros(reformattedHours)} : ${leadingZeros(currentTime.getMinutes())} : ${leadingZeros(currentTime.getSeconds())}`;
    document.getElementById("clock").textContent = displayTime + midDayIndicator;
};

function offsetTime() {
    document.querySelectorAll('input.time-zone').forEach(option => {
        if(option.checked) {
            offsetID = option.id;
        }
    });
}

function leadingZeros(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
};

document.getElementById("12-hour").addEventListener("click", function () {
    timeFormat = 1;
    updateTime();
})

document.getElementById("24-hour").addEventListener("click", function () {
    timeFormat = 0;
    updateTime();
})

setInterval(updateTime, 1000);