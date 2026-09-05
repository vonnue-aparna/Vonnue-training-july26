import { describe, expect, test } from "vitest";
import { StateType } from "../types/timeTypes";
import { createStore } from "../store/timeState";
import { reducer } from "../store/reducer";

describe("testing state", () => {
  const firstState: StateType = {
    tasks: [
      {
        taskName: "task1",
        startTime: 1212,
        endTime: 2423,
        totalDuration: 60,
      },
      {
        taskName: "task2",
        startTime: 1212,
        endTime: 2423,
        totalDuration: 60,
      },
    ],
    startTime: 0,
    pauseTime: 0,
    endTime: 0,
    route: "/dashboard",
  };

  test("--- task addition", () => {
    const store = createStore(firstState, reducer);

    const task = {
      taskName: "task3",
      startTime: 1212,
      endTime: 2423,
      totalDuration: 60,
    };

    store.dispatch({
      type: "ADD_TASK",
      payload: task,
    });

    const tasks = store.getState().tasks;

    expect(tasks).toEqual([
      {
        taskName: "task1",
        startTime: 1212,
        endTime: 2423,
        totalDuration: 60,
      },
      {
        taskName: "task2",
        startTime: 1212,
        endTime: 2423,
        totalDuration: 60,
      },
      {
        taskName: "task3",
        startTime: 1212,
        endTime: 2423,
        totalDuration: 60,
      },
    ]);
  });

  test("--- testing total worked hours", () => {
    const store = createStore(firstState, reducer);

    const task = {
      taskName: "task3",
      startTime: 1212,
      endTime: 2423,
      totalDuration: 60,
    };

    store.dispatch({
      type: "ADD_TASK",
      payload: task,
    });

    const tasks = store.getState().tasks;

    let totalTimeWorked = 0;
    tasks.forEach((task) => {
      totalTimeWorked += task.totalDuration;
    });

    expect(totalTimeWorked).toEqual(180);
  });
});
