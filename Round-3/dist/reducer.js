export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TIMER':
            return [
                ...state,
                {
                    startTime: Number(action.payload.startTime),
                    endTime: Number(action.payload.endTime),
                    task_name: action.payload.task_name
                }
            ];
        default:
            return state;
    }
}
