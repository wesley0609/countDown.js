
var timeBlock = document.querySelector(".time_block");
var fullDate = timeBlock.getAttribute("data-date");
var fullTime = timeBlock.getAttribute("data-time");
var splitFullDate = fullDate.split("/");
var splitFullTime = fullTime.split(":");
var year = splitFullDate[0];
var month = splitFullDate[1] - 1;
var day = splitFullDate[2];
var hour = splitFullTime[0];
var minute = splitFullTime[1];
var second = splitFullTime[2];
var getEndTime = new Date(year, month, day, hour, minute, second);

var checkTime = function(){
    var timeDate = document.querySelector(".time_date");
    var timeHour = document.querySelector(".time_hour");
    var timeMin = document.querySelector(".time_min");
    var timeSec = document.querySelector(".time_sec");

    var getStartTime = new Date();
    var diff = +new Date(getEndTime - getStartTime);
    var diffDate = Math.floor(diff / (24 * 60 * 60 * 1000));
    var diffHour = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var diffMin = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    var diffSec = Math.floor((diff % (60 * 1000)) / (1000));

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

    if(diff > 0){
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

        clearInterval(mm);
    }
};

var mm = window.setInterval("checkTime()", 1000);
