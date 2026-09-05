import { renderDashboard } from "./pages/renderDashboard.js";
import { renderTrack } from "./pages/renderTrack.js";
import { reducer } from "./store/reducer.js";
import { createStore } from "./store/timeState.js";
import { StateType } from "./types/timeTypes";

console.log("hello");

const aTags = document.querySelectorAll(".nav-link");
const app = document.getElementById("app") as HTMLElement;

aTags.forEach((aTag) => {
  aTag.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("a tag clicked");
  });
});

const initialState: StateType = {
  tasks: [
    {
      taskName: "task1",
      startTime: 1212,
      endTime: 2423,
      totalDuration: 60,
    },
    {
      taskName: "task2",
      startTime: 1212,
      endTime: 2423,
      totalDuration: 60,
    },
  ],
  startTime: 0,
  pauseTime: 0,
  endTime: 0,
  route: "/dashboard",
};

const store = createStore(initialState, reducer);
function renderFN() {
  const route = store.getState().route;
  let page;
  switch (route) {
    case "/dashboard": {
      page = renderDashboard(store);
      break;
    }
    case "/track": {
      page = renderTrack(store);
      break;
    }
  }
  if (app && page) app.replaceChildren(page);
}
store.subscribe(renderFN);
