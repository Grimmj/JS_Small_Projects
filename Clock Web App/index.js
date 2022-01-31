let timeFormat = 0;
let reformattedHours;
let middayIndicator;

function updateTime() {
    let currentTime = new Date();
    console.log(currentTime.getTimezoneOffset())
    if (timeFormat === 0) {
        reformattedHours = currentTime.getHours();
        middayIndicator = '';
    }
    else {
        reformattedHours = (currentTime.getHours() > 12) ? currentTime.getHours() - 12 : currentTime.getHours();
        middayIndicator = (currentTime.getHours() > 12) ? " PM" : " AM";
    }
    let displayTime = `${leadingZeros(reformattedHours)} : ${leadingZeros(currentTime.getMinutes())} : ${leadingZeros(currentTime.getSeconds())}`;
    document.getElementById("clock").textContent = displayTime + middayIndicator;
};

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