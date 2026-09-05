import { renderTime } from "./renderTime.js";
import { liveCounter,endLiveCounter } from "./liveCounter.js";

console.log("Hello");
const startTimer=document.getElementById("start-timer")

const stopTimer=document.getElementById("stop-timer")
const displayElpasedTime=document.getElementById("display-time")
const liveTimerDOM=document.getElementById("live-counter")

let elapsedTime=null
let startTime=null
let endTime=null
startTimer.addEventListener("click",()=>{
    startTime=Date.now()
    startTimer.setAttribute("disabled","true")
    liveCounter(liveTimerDOM)
    // console.log(startTime);
})

stopTimer.addEventListener("click",()=>{
    endTime=Date.now()
    startTimer.removeAttribute("disabled","false")
    findElapsedTime()
    endLiveCounter()
    // console.log(endTime);
})

function findElapsedTime(){
    if(startTime<endTime && startTime && endTime){
        elapsedTime=endTime-startTime
        console.warn(elapsedTime);
        startTime=null
        endTime=null
        renderTime(displayElpasedTime,elapsedTime)
    }
    else{
        console.warn("Start-Stop click logic fail");
    }
}

// const DateObject = new Date()
// console.log(DateObject);

