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
