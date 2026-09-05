import { renderDashboard } from "./pages/renderDashboard.js";
import { renderTrack } from "./pages/renderTrack.js";
import { createRouter } from "./router/router.js";
import { reducer } from "./store/reducer.js";
import { createStore } from "./store/timeState.js";
import { StateType } from "./types/timeTypes";

console.log("hello");

const aTags = document.querySelectorAll(".nav-link");
const app = document.getElementById("app") as HTMLElement;

const firstState: StateType = {
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

// for local storage state loading
function loadState() {
  const savedSate = localStorage.getItem("time-tracker");
  if (savedSate) {
    return JSON.parse(savedSate);
  }
  return firstState;
}

const initialState = loadState();
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

const router = createRouter(store);
router.register("/dashboard");
router.register("/track");
aTags.forEach((aTag) => {
  aTag.addEventListener("click", (e) => {
    e.preventDefault();
    const href = aTag.getAttribute("href") || "/dashboard";
    router.navigate(href);
  });
});
