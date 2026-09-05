import { Action, Task } from "./types.js";

export function reducer(state:Task[],action:Action):Task[] {
    switch (action.type) {
        case 'ADD_TIMER':
            return [
                ...state,
                {
                    startTime: Number(action.payload.startTime),
                    endTime: Number(action.payload.endTime),
                    task_name:action.payload.task_name
                }
            ]
    
        default:
            return state
    }
}