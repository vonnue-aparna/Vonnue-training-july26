const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

export function createStore(initialData = initialState) {
  let state = {
    ...initialData,
  };

  const listeners = new Set();

  function getState() {
    return {
      ...state,
      tasks: [...state.tasks],
    };
  }

  function subscribe(listener) {
    listeners.add(listener);

    return function unsubscribe() {
      listeners.delete(listener);
    };
  }

  function notify() {
    listeners.forEach((listener) => {
      listener(getState());
    });
  }

  function dispatch(action) {
    switch (action.type) {
      case "SET_LOADING":
        state = {
          ...state,
          loading: action.payload,
        };
        break;

      case "SET_ERROR":
        state = {
          ...state,
          loading: false,
          error: action.payload,
        };
        break;

      case "SET_TASKS":
        state = {
          ...state,
          tasks: action.payload,
        };
        break;

      case "ADD_TASK":
        state = {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
        break;

      case "EDIT_TASK":
        state = {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
              ? {
                  ...task,
                  ...action.payload,
                }
              : task,
          ),
        };
        break;

      case "DELETE_TASK":
        state = {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? {
                  ...task,
                  deleted: true,
                }
              : task,
          ),
        };
        break;

      case "RESTORE_TASK":
        state = {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? {
                  ...task,
                  deleted: false,
                }
              : task,
          ),
        };

        break;

      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
    notify();
  }

  return {
    getState,
    subscribe,
    dispatch,
  };
}
