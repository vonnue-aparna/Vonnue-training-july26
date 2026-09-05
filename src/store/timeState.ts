import { ActionType, ReducerType, StateType } from "../types/timeTypes";

export function createStore(initialState: StateType, reducer: ReducerType) {
  let state = initialState;
  let listeners: (() => void)[] = [];
  function getState() {
    return state;
  }

  function dispatch(action: ActionType) {
    state = reducer(state, action);

    listeners.forEach((listener) => {
      listener();
    });
  }

  function subscribe(fn: () => void) {
    listeners.push(fn);
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}
