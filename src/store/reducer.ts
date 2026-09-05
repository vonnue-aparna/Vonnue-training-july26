import { ActionType, StateType } from "../types/timeTypes";

export function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "SET_ROUTE": {
      return {
        ...state,
        route: action.payload,
      };
    }
  }
}
