export function addEvent(time: string, event: string) {
  return {
    type: "ADD_EVENT",
    time: time,
    event: event,
  };
}

export function removeEvent(event: any) {
  return {
    type: "REMOVE_EVENT",
    payload: event,
  };
}
