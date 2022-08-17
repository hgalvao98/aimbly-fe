export const initialState: [] | any = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
  switch (action.type) {
    case "ADD_EVENT":
      return [
        ...state,
        { time: action.time, event: action.event, completed: false },
      ];
    case "REMOVE_EVENT":
      const events = state.filter((data: any) => data !== action.payload);
      return events;
    case "DEL_EVENT":
      console.log(state);
      // eslint-disable-next-line array-callback-return
      return state.map((item: any) => {
        if (item.event === action.payload.event) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });

    default:
      return state;
  }
}
