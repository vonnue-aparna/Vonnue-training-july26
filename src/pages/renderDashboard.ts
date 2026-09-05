import { StoreType } from "../types/timeTypes";

export function renderDashboard(store: StoreType): HTMLElement {
  const section = document.createElement("section");
  section.className = "dashboard-section";
  const h2 = document.createElement("h2");
  h2.textContent = "Dashboard";

  const tasks = store.getState().tasks;
  let totalTimeWorked = 0;
  tasks.forEach((task) => {
    totalTimeWorked += task.totalDuration;
  });

  const overviewDiv = document.createElement("div");
  overviewDiv.className = "dashboard-container";
  overviewDiv.innerHTML = ` <h3>TOTAL COMPLETED TASKS: ${tasks.length}</h3>
                            <h3>TOTAL DURATION WORKED: ${totalTimeWorked}</h3>`;

  const recentTaskDiv = document.createElement("div");
  recentTaskDiv.className = "log-container";

  let recentTaskList = ``;
  tasks.forEach((task) => {
    recentTaskList += ` <article class="task">
            <h3>${task.taskName}</h3>
            <p>StartTime: ${task.startTime}</p>
            <p>EndTime: ${task.endTime}</p>
            <p>TotalDuration: ${task.totalDuration}</p>
          </article>`;
  });
  recentTaskDiv.innerHTML = recentTaskList;

  section.appendChild(h2);
  section.appendChild(overviewDiv);
  section.appendChild(recentTaskDiv);
  return section;
}
