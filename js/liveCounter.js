let timer;
export function liveCounter(livecounterDOM){
    
    timer=setInterval(()=>{
        // console.log(livecounterDOM);
        
        livecounterDOM.textContent=""
        // console.log(Date.now());
        livecounterDOM.append(Date.now())
    },300)

}

export function endLiveCounter(){
    if(timer){
        clearInterval(timer)
    }
}