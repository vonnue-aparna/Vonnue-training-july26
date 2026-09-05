export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TIMER':
            return [
                ...state,
                {
                    startTime: action.payload.startTime,
                    endTime: action.payload.endTime,
                    task_name: action.payload.task_name
                }
            ];
        default:
            return state;
            break;
    }
}
