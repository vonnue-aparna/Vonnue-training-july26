import { reducer } from "./reducer.js";
export function createStore(initialState) {
    let state = initialState;
    let listeners = [];
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener => {
            listener();
        });
        localStorage.setItem("task-data", JSON.stringify(state));
        return state;
    }
    function subscribe(listener) {
        listeners.push(listener);
    }
    return {
        getState,
        dispatch,
        subscribe
    };
}
