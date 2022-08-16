export const initialState: [] = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
  switch (action.type) {
    case "ADD_EVENT":
      return [...state, { time: action.time, event: action.event }];
    case "REMOVE_EVENT":
      const events = state.filter((data) => data !== action.payload);
      return events;
    default:
      return state;
  }
}
