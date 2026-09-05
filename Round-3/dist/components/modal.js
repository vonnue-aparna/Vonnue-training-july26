import { router, store } from "../main.js";
export function Modal(start_time, end_time) {
    console.log('appending modal');
    let modal = document.createElement("div");
    modal.innerHTML = `
        <h4>What are you working on?</h4>
        <form>
            <input type="text" class="task-input"/>
            <button class="submit-task">Submit</button>
        </form>
    `;
    modal.classList.add("modal");
    document.body.appendChild(modal);
    let input = document.querySelector(".task-input");
    let form = document.querySelector("form");
    form.onsubmit = (e) => {
        e.preventDefault();
        let updatedData = store.dispatch({
            type: 'ADD_TIMER',
            payload: {
                startTime: start_time.toString(),
                endTime: end_time.toString(),
                task_name: input.value
            }
        });
        console.log(updatedData);
        let log = document.createElement("div");
        log.innerHTML = `<div> <h3>${input.value} with start time: ${new Date(start_time).getTime()} and
        end time:${new Date(end_time).getTime()} and duration ${new Date(end_time).getTime() - new Date(start_time).getTime()}
        </h3>  recorded successfully </div>`;
        modal.appendChild(log);
        setTimeout(() => {
            modal.remove();
            router.route();
        }, 2000);
    };
    return modal;
}
