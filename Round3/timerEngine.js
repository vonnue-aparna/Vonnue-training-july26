
const timer= document.getElementById("timerEngine");

const startButton= document.getElementById("start");

const pauseButton= document.getElementById("pause");

const currentTimeBtn= document.getElementById("currTime");

const currentTime= document.getElementById("current");

const hours= document.getElementById("hours");
const minutes= document.getElementById("minutes");
const seconds= document.getElementById("seconds");

function startTimer(){

    startButton.addEventListener("click",()=>{
        const startValue=0;

       hours.textContent= startValue ;
       minutes.textContent=startValue;
       seconds.textContent=startValue;
  
const duration = 2000;
const endValue = 100;

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function animateCounter(startTime) {

    const currentTime = performance.now();

    const elapsed = currentTime - startTime;

    let progress = elapsed / duration;

    if (progress > 1) {
        progress = 1;
    }

    const easedProgress = easeOutCubic(progress);

    const value =
        startValue +
        (endValue - startValue) * easedProgress;

    counter.textContent = Math.round(value);

    if (progress < 1) {
        requestAnimationFrame(() => {
            animateCounter(startTime);
        });
    }
}

startCounter.addEventListener("click", () => {

    counter.textContent = startValue;

    const startTime = performance.now();

    requestAnimationFrame(() => {
        animateCounter(startTime);
    });
});

    })
}


function currTime(){

    currentTimeBtn.addEventListener("click",()=>{
        const p= document.createElement("p");

       p.textContent=Date();

       localStorage.setItem("currentTime",JSON.stringify(p));

        currentTime.appendChild(p);
    })
}
currTime()


function logTimer(){

    const card=document.createElement("div");
     
    card.textContent=`
    Time ${Date.now()}`

    const jsonData=localStorage.getItem("currentTime");
   
    return logTimer;

}
console.log(logTimer());


 




















