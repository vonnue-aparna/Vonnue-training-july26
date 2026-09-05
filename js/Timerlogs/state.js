export let log=[]

export function updatelog(){
    let storage=JSON.parse(localStorage.getItem("logs"))
    if(storage){
        log=storage
    }
    console.log("This is log");
    console.log(log)
}

updatelog()

// {
//         Task_Name:"name",
//         start_time:"start",
//         end_time:"end"
// }
