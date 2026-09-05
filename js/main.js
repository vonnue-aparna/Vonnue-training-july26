import { createState } from "./timerState.js";

console.log("App running");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const timerSpan = document.getElementById("timer");
const taskForm = document.getElementById("taskForm");
const submitBtn = document.getElementById("submitBtn");

const state = createState();


let startTime = null;
let endTime = null;
let duration = null;

startBtn.addEventListener("click", ()=> {
    startTime = Date.now();
    console.log("Start");

});

pauseBtn.addEventListener("click", ()=> {
    endTime = Date.now();
    duration = endTime-startTime;
    console.log("Pause");
    
    taskForm.style.display = "block";

    const taskName = document.getElementById("taskName");
    const taskDuration = duration;
    submitBtn.addEventListener("click", ()=>{
        name = taskName.value;
        console.log(`Task name: ${name}, duration(in ms): ${taskDuration}`);
        console.log("Submitted");

        data = {
            "taskName": name,
            "startTime": startTime,
            "endTime": endTime,
            "duration": duration
        }



        state.dispatch({
            type: "ADD_TASK",
            payload: {
                "taskName": name,
                "startTime": startTime,
                "endTime": endTime,
                "duration": duration
            }
        });

        console.log(state);
        
        taskForm.style.display = "none";
    });

    console.log(startTime);

    endTime = null;
    startTime = null;
    duration = null;

});


