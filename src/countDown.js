
let checkTimeInterval = null;
let timeBlock = document.querySelector(".time_block");
let endtime = timeBlock.getAttribute("data-endtime");
let getEndTime = new Date(endtime).getTime();

let execute = () => {
    checkTimeInterval = setInterval(() => {
        checkTime();
    }, 1000);
};

let checkTime = () => {
    let timeDate = timeBlock.querySelector(".time_date");
    let timeHour = timeBlock.querySelector(".time_hour");
    let timeMin = timeBlock.querySelector(".time_min");
    let timeSec = timeBlock.querySelector(".time_sec");

    let getStartTime = new Date().getTime();
    let diffTime = getEndTime - getStartTime;
    let diffDate = Math.floor(diffTime / (24 * 60 * 60 * 1000));
    let diffHour = Math.floor((diffTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let diffMin = Math.floor((diffTime % (60 * 60 * 1000)) / (60 * 1000));
    let diffSec = Math.floor((diffTime % (60 * 1000)) / 1000);

    if(diffDate < 10){
        diffDate = String(0) + String(diffDate);
    }

    if(diffHour < 10){
        diffHour = String(0) + String(diffHour);
    }

    if(diffMin < 10){
        diffMin = String(0) + String(diffMin);
    }

    if(diffSec < 10){
        diffSec = String(0) + String(diffSec);
    }

    if(diffTime > 0){
        timeDate.innerHTML = diffDate;
        timeHour.innerHTML = diffHour;
        timeMin.innerHTML = diffMin;
        timeSec.innerHTML = diffSec;
    }
    else{
        timeDate.innerHTML = "00";
        timeHour.innerHTML = "00";
        timeMin.innerHTML = "00";
        timeSec.innerHTML = "00";

        clearInterval(checkTimeInterval);
    }
};

execute();