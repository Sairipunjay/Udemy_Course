var blackColor = document.getElementById("black");
var blueColor =document.getElementById("blue");
var redColor = document.getElementById("red");
var purpleColor = document.getElementById("purple");



var smartwatch = document.getElementById("smartwatch");
var screenStr = document.getElementById("display-screen");

var currentTime = document.getElementById("timedisplay");
var heartRate = document.getElementById("heartrate");
var heartLbl = document.getElementById("heartLabel");

blackColor.addEventListener("click",function(){
    smartwatch.src = "https://i.imgur.com/iOeUBV7.png";
});

blueColor.addEventListener("click",function(){
    smartwatch.src = "https://i.imgur.com/Mplj1YR.png";
});


redColor.addEventListener("click",function(){
    smartwatch.src = "https://i.imgur.com/PTgQlim.png";
});

purpleColor.addEventListener("click",function(){
    smartwatch.src = "https://i.imgur.com/xSIK4M8.png";
});

 function myTimer(){
    var currentDate = new Date();
    var displayTime = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();
    screenStr.innerHTML = displayTime;
    heartLbl.style.display="none";
 }


heartRate.addEventListener("click",function(){
   
    screenStr.innerHTML='<i id="heartBeat" class="fas fa-heartbeat"></i>'
    heartLbl.style.display="block";
})