import { StoreType } from "../types/timeTypes";

export function renderTrack(store: StoreType): HTMLElement {
  const mainSection = document.createElement("section");
  const section = document.createElement("section");
  section.className = "track-container";

  const sectionModal = document.createElement("section");
  sectionModal.className = "modal";
  sectionModal.style.display = "none";

  let interval: number;
  let pauseClicked = true;
  let time = 0;
  let startTime: number;
  let pauseTime: number;
  let endTime: number;

  const addDiv = document.createElement("div");
  addDiv.className = "add-task";
  addDiv.innerHTML = `<div id="timer">TIMER:</div>
          <div class="btn-container">
            <button id="start-btn">Start Task</button>
            <button id="pause-btn">Pause Task</button>
            <button id="stop-btn">Stop Task</button>
          </div>`;

  const timer = addDiv.querySelector("#timer");

  // this is used to start the timer
  addDiv.querySelector("#start-btn")?.addEventListener("click", () => {
    console.log("start btn");
    startTime = Date.now();

    // this code implements the live timer
    interval = setInterval(() => {
      if (timer) timer.textContent = `TIMER: ${time} (in seconds)`;
      time++;
    }, 1000);
  });

  // this is used to pause the timer
  addDiv.querySelector("#pause-btn")?.addEventListener("click", () => {
    pauseTime = Date.now();
    if (pauseClicked) {
      clearInterval(interval);
      pauseClicked = false;
    } else {
      interval = setInterval(() => {
        if (timer) timer.textContent = `TIMER: ${time} (in seconds)`;
        time++;
      }, 1000);
      pauseClicked = true;
    }
    console.log("pause btn");
  });

  // this is used to stop the timer and display the modal
  addDiv.querySelector("#stop-btn")?.addEventListener("click", () => {
    endTime = Date.now();
    console.log("stop btn");
    sectionModal.style.display = "block";
    section.style.display = "none";
  });

  const tasks = store.getState().tasks;
  let taskList = ``;

  tasks.forEach((task) => {
    taskList += ` <article class="task">
      <h3>${task.taskName}</h3>
      <p>Start Time: ${task.startTime}</p>
      <p>End Time: ${task.endTime}</p>
      <p>Total Duration: ${task.totalDuration}</p>
    </article>`;
  });

  const logDiv = document.createElement("div");
  logDiv.className = "log-container";
  logDiv.innerHTML = taskList;
  section.appendChild(addDiv);
  section.appendChild(logDiv);

  sectionModal.innerHTML = `<div class="task-addition">
          <p class="p-modal">
            <label>ENTER TASK NAME:</label>
            <input type="text" required id="task-name" />
            <button type="submit" id="enter-btn">ADD TASK</button>
            <button type="submit" id="close-btn">close</button>
          </p>
        </div>`;

  const inputField = sectionModal.querySelector(
    "#task-name",
  ) as HTMLInputElement;

  // this function add task to the task store
  sectionModal.querySelector("#enter-btn")?.addEventListener("click", () => {
    console.log("enter btn clicked");
    const value = inputField.value;
    console.log(value);

    const totalDuration = (endTime - startTime) / 1000;
    store.dispatch({
      type: "ADD_TASK",
      payload: {
        taskName: value,
        startTime: startTime,
        endTime: endTime,
        totalDuration: totalDuration,
      },
    });
  });

  // this function closes the modal and reset the input field
  sectionModal.querySelector("#close-btn")?.addEventListener("click", () => {
    console.log("close btn clicked");
    section.style.display = "block";
    sectionModal.style.display = "none";
    inputField.value = "";
  });

  mainSection.appendChild(section);
  mainSection.appendChild(sectionModal);
  return mainSection;
}
