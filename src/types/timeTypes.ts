export type TaskType = {
  taskName: string;
  startTime: string;
  endTime: string;
  totalDuration: string;
};

export type StateType = {
  tasks: TaskType[];
  startTime: string;
  pauseTime: string;
  endTime: string;
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
