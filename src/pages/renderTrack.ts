import { StoreType } from "../types/timeTypes";

export function renderTrack(store: StoreType): HTMLElement {
  const section = document.createElement("section");
  section.innerHTML = `<div class="track-container">
        <div class="add-task">
          <div>TIMER:</div>
          <div class="btn-container">
            <button>Start Task</button>
            <button>Pause Task</button>
            <button>End Task</button>
          </div>
        </div>
        <div class="log-container">
          <article class="task">
            <h3>Task Name</h3>
            <p>StartTime:</p>
            <p>EndTime:</p>
            <p>TotalDuration:</p>
          </article>
          <article class="task">
            <h3>Task Name</h3>
            <p>StartTime:</p>
            <p>EndTime:</p>
            <p>TotalDuration:</p>
          </article>
          <article class="task">
            <h3>Task Name</h3>
            <p>StartTime:</p>
            <p>EndTime:</p>
            <p>TotalDuration:</p>
          </article>
        </div>
      </div>`;

  return section;
}
