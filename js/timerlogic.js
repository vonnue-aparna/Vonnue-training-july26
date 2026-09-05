import { renderTime } from "./renderTime.js";
import { liveCounter,endLiveCounter } from "./liveCounter.js";
import { reducer } from "./Timerlogs/reducer.js";
import { updatelog } from "./Timerlogs/state.js";
import { dashboard } from "./Dashboard/dashboard.js";

console.log("Hello");
const startTimer=document.getElementById("start-timer")
const stopTimer=document.getElementById("stop-timer")
const displayElpasedTime=document.getElementById("display-time")
const liveTimerDOM=document.getElementById("live-counter")
const sectionlogs=document.getElementById("logs")
const timersection=document.getElementById("timer")
const dashboardSection=document.getElementById("dashboards")
let elapsedTime=null
let startTime=null
let endTime=null
startTimer.addEventListener("click",()=>{
    startTime=Date.now()
    startTimer.setAttribute("disabled","true")
    liveCounter(liveTimerDOM)
    reducer.STARTTIME(startTime)
    // console.log(startTime);
})

stopTimer.addEventListener("click",()=>{
    if(startTime){
        endTime=Date.now()
        startTimer.removeAttribute("disabled")
        
        endLiveCounter()
        // console.log("Endtime",endTime);
        
        let task_name=prompt("Enter Task Name")
        if(!task_name){
            task_name="Unidentified"
        }
        
        console.log(endTime);
        reducer.ENDTIME(endTime,task_name,endTime-startTime)
        reducer.DISPLAY()
        findElapsedTime()
        reducer.DOM(sectionlogs)
        reducer.UPDATE()
        updatelog()
    }
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

window.addEventListener("DOMContentLoaded",()=>{
    // localStorage.clear()
    if(window.location.hash==""){
        window.location+="#timer"
    }
    const json=JSON.parse(localStorage.getItem("logs"))
    console.log(json);
    updatelog()
    if(json){

        json.forEach(log => {
            reducer.RELOAD(sectionlogs,log)
        });
    }
    sectionlogs.style.display="block"
    timersection.style.display="block"
    dashboardSection.style.display="none"
})

const dashboard_link=document.getElementById("dashboard_link")
const timer_link=document.getElementById("timer_link")
dashboard_link.addEventListener("click",()=>{
    sectionlogs.style.display="none"
    timersection.style.display="none"
    dashboardSection.style.display="block"
    const json=JSON.parse(localStorage.getItem("logs"))
    dashboard(dashboardSection,json)
})

timer_link.addEventListener("click",()=>{
    sectionlogs.style.display="block"
    timersection.style.display="block"
    dashboardSection.style.display="none"
})

// const DateObject = new Date()
// console.log(DateObject);

