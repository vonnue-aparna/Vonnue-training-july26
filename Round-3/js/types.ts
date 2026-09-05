export type Route = {
    path: string,
    component:() => void
}

export type Task = {
    startTime: number,
    endTime: number,
    task_name:string
}

export type Action = 
    | {
        type: 'ADD_TIMER',
        payload: {
            task_name: string,
            startTime: string,
            endTime:string
        }
    }

export type Listener = () => void;

export type Store = {
    getState: () => Task[];
    dispatch: (action: Action) => void;
    subscribe: (listener: Listener) => void;
}

export type Router = {
    register: (path: string, component: () => void) => void;
    navigate: (path: string) => void;
    route: () => void;
}