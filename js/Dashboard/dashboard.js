// import { log } from "";

export function dashboard(targetDOM,log){
    targetDOM.textContent=""
    let sum=0
   for(let i of log){
        sum+=i.elapsed_time
   }
   targetDOM.textContent=`TotaL Time : ${sum}`
}