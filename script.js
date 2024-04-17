// We need to First call out all the Ids we going to work on using the code bellow:
const day = document.getElementById("day")
const time = document.getElementById("Hours")
const minute = document.getElementById("minute")
const second = document.getElementById("second")

const endcourse = "31 July 2024"              // you need to declare the date you looking to count down

function countDown(){
    const endcour = new Date(endcourse)         // this will convert string to a new date and will stored inside the const "endcour"
    const today = new Date ()              // this will automatically take todays date
    const totalseconds = (endcour - today)/1000;  // this will calcute home many seconds until "endcourse" divide to 1000 to convert from milliseconds to seconds
    const finaldays = Math.floor(totalseconds / 60 / 60 / 24 ); // math.floor will only whole number 
    const finalhours = Math.floor(totalseconds / 60 / 60) % 24 ;// but need to get the rest which wasnt counted on the days math using % 24 (a day)
    const finalminutes = Math.floor(totalseconds / 60) % 60; // this will find the minutes dive by 60 which is the rest of top math
    const finalseconds = Math.floor(totalseconds) % 60; // will find the seconds and take the rest from minutes

    // final stage is to call out on HTML using code bellow

    day.innerHTML = finaldays
    Hours.innerHTML = timeformat(finalhours)
    minute.innerHTML = timeformat(finalminutes)
    second.innerHTML = timeformat(finalseconds)

} 

function timeformat(time) {
    return time < 10? `0${time}` : time;  // this will create 2 digitis on hours minutes and second
}

countDown();
setInterval(countDown,1000) // this will countdown the seconds 