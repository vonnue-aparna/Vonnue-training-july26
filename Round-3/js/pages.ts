import { Button } from "./components/button.js"
import { Modal } from "./components/modal.js"
import { store } from "./main.js"

let app = document.querySelector(".app") as HTMLElement

export function renderHomePage() {
    app.replaceChildren()
    console.log('rendering home')     

    let timer = document.createElement("h1") as HTMLHeadingElement
    timer.innerText = String(0)
    let animationTimer: number;

    let count = 0;
    let start_time: number;
    let end_time: number;

    let startBtn = Button('start', () => {
        console.log('start button pressed')
        start_time = Date.now()
        function updateCounter() {
            console.log("inside update counter")
            count = 0;
            function update() {
                count++;
                console.log(count);
                requestAnimationFrame(update)
                timer.innerHTML = `${count}`

                cancelAnimationFrame(animationTimer)
            }
            animationTimer = requestAnimationFrame(update)
        }

        console.log("calling update counter")
        updateCounter()
    })

    let pauseBtn = Button('pause', () => {
        end_time = Date.now()
        let modal = Modal(start_time, end_time);
        function stopCounter() {
            cancelAnimationFrame(animationTimer)
            console.log(start_time, ":", end_time, ":", count);
        }

        stopCounter()
     })

    app.appendChild(timer)
    app.appendChild(startBtn)
    app.appendChild(pauseBtn)
}

export function renderDashBoard() {
    console.log('dashboard home')
    app.replaceChildren()

    let state = store.getState()


    state.forEach(task => {

        let s = new Date(task.startTime)
        let e = new Date(task.endTime)

        let sec = e.getSeconds() - s.getSeconds()

        let div = document.createElement("div")
        div.innerHTML = `
            <div>
                <h3>${task.task_name}</h3>
                <h6>Start time: ${task.startTime}</h6>
                <h6>End time: ${task.endTime}</h6>
                <p>duration: ${sec} sec</p>
            </div>
        `

        app.appendChild(div)
    })
    
}