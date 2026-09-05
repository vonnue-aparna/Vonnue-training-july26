import { reducer } from "./reducer.js";
import { Action, Listener, Task } from "./types.js";

export function createStore(initialState: Task[]) {
    let state = initialState;
    let listeners: Listener[] = []

    function getState() {
        return state;
    }

    function dispatch(action:Action) {
        state = reducer(state, action);
        listeners.forEach(listener => {
            listener()
        })
        localStorage.setItem("task-data",JSON.stringify(state))

        return state
    }

    function subscribe(listener:Listener) {
        listeners.push(listener)
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}