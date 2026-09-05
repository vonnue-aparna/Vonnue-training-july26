export type TaskType = {
  taskName: string;
  startTime: number;
  endTime: number;
  totalDuration: number;
};

export type StateType = {
  tasks: TaskType[];
  startTime: number;
  pauseTime: number;
  endTime: number;
  route: string;
};

export type ActionType = {
  type: "SET_ROUTE";
  payload: string;
};

export type ReducerType = (state: StateType, action: ActionType) => StateType;

export type StoreType = {
  getState: () => StateType;
  dispatch: (action: ActionType) => void;
  subscribe: (fn: () => void) => void;
};
