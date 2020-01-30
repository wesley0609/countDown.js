
var timeBlock = document.querySelector(".time_block");
var endtime = timeBlock.getAttribute("data-endtime");
var getEndTime = new Date(endtime).getTime();

var checkTime = function(){
    var timeDate = timeBlock.querySelector(".time_date");
    var timeHour = timeBlock.querySelector(".time_hour");
    var timeMin = timeBlock.querySelector(".time_min");
    var timeSec = timeBlock.querySelector(".time_sec");

    var getStartTime = new Date().getTime();
    var diffTime = getEndTime - getStartTime;
    var diffDate = Math.floor(diffTime / (24 * 60 * 60 * 1000));
    var diffHour = Math.floor((diffTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var diffMin = Math.floor((diffTime % (60 * 60 * 1000)) / (60 * 1000));
    var diffSec = Math.floor((diffTime % (60 * 1000)) / (1000));

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

        clearInterval(mm);
    }
};

var mm = window.setInterval("checkTime()", 1000);
