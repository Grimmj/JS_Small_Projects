function updateTime() {
    let currentTime = new Date();
    let displayTime = `${leadingZeros(currentTime.getHours())} : ${leadingZeros(currentTime.getMinutes())} : ${leadingZeros(currentTime.getSeconds())}`;
    document.getElementById("clock").textContent = displayTime;
};

function leadingZeros(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
};

setInterval(updateTime, 1000);