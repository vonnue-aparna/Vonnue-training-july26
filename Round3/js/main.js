import { createStore } from "./store";
import { initRouter } from "./router";
import { renderApp } from "./render";
import { loadTasks } from "./data";
import { loadState, saveState } from "./storage";

const savedState = loadState();

const store = createStore(savedState || undefined);

let currentRoute = "/dashboard";

store.subscribe((state) => {
  renderApp(state, currentRoute, store);

  if (!state.loading && !state.error) {
    saveState(state);
  }
});

async function initializeApp() {
  if (savedState) {
    return;
  }

  store.dispatch({
    type: "SET_LOADING",
    payload: true,
  });

  try {
    const tasks = await loadTasks();

    store.dispatch({
      type: "SET_TASKS",
      payload: tasks,
    });
  } catch (error) {
    store.dispatch({
      type: "SET_ERROR",
      payload: error.message,
    });
  }
}

initializeApp();

initRouter((route) => {
  currentRoute = route;
  renderApp(store.getState(), currentRoute, store);
});

export { store };
