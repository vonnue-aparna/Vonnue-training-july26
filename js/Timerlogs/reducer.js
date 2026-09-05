import { log } from "./state.js";

const actions={
    startTime:"STARTTIME",
    endTime:"ENDTIME",
}

export const reducer={
    STARTTIME:(startTime)=>{
        let newlog={
        Task_Name:null,
        start_time:startTime,
        end_time:0,
        elapsed_time:null
        }
        // console.log(newlog);
        // console.log(log);
        log.push(newlog)
        // console.log(log);
        
    },
    ENDTIME:(endTime,Taskname,elapsedTime)=>{

        let lastlog=log.at(-1)
        console.log(lastlog);
        console.log("ENDTIME REDUCER",endTime);
        
        
        log.at(-1).end_time=endTime
        log.at(-1).elapsed_time=elapsedTime
        log.at(-1).Task_Name=Taskname
    },
    DISPLAY:()=>{
        console.log(log);
            log.forEach(entry => {
                console.log(entry);
            });
    },
    DOM : (targetDOM)=>{
        let body=`<div>
                <h2>${log.at(-1).Task_Name}</h2>
                <h3>Start time : ${log.at(-1).start_time}</h3>
                <h3>End time : ${log.at(-1).end_time}</h3>
                <h3>Total time : ${log.at(-1).elapsed_time} </h3>
            </div> `
        const div=document.createElement("div")
        div.innerHTML=body
        targetDOM.append(div)
    },
    RELOAD : (targetDOM,entry)=>{
        let log=[entry]
        let body=`<div>
                <h2>${log.at(-1).Task_Name}</h2>
                <h3>Start time : ${log.at(-1).start_time}</h3>
                <h3>End time : ${log.at(-1).end_time}</h3>
                <h3>Total time : ${log.at(-1).elapsed_time} </h3>
            </div> `
        const div=document.createElement("div")
        div.innerHTML=body
        targetDOM.append(div)    
    },
    UPDATE:()=>{
        localStorage.setItem("logs",JSON.stringify(log))
    }
}


// function taskidgenerator(){
//     let uniqueid=0
//     return ()=>{
//         uniqueid+=1
//         return "T"+uniqueid
//     }
// }