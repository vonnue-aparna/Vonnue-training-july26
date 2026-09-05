const initialState = {
    tasks:[]
}

export function createState(initialData = initialState) {

    let state = {
        ...initialData
    }

    let listeners = new Set();

    function getState() {
        return {
            ...state
        }
    }

    function subscribe(listener) {
        listeners.add(listener);

        return function unsubscribe() {
            listeners.delete(listener);
        }
    }

    function notify() {
        listeners.forEach((listener) => {
            subscribe(getState());
        });
    }

    function dispatch(action) {
        switch(action.type) {
            
            case "ADD_TASK":
                state = {
                    ...state,
                    tasks: [
                        ...state.tasks, action.payload
                    ]
                }

        default:
            console.log("Invalid operation");
        
        }

        notify();
    }

    return {
        dispatch, subscribe, getState
    }
}
