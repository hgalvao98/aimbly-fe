import React, { useEffect, useState } from "react";
import { addEvent, removeEvent } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";

export default function App() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState("");
  const events: [] = useSelector((state: any) => state.events);

  const dispatch = useDispatch();

  console.log(events);

  const handleEvent = (e: any) => {
    e.preventDefault();
    dispatch(addEvent(time, event));
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setDate(new Date());
  }

  const realTime = date
    .toLocaleTimeString()
    .match(/\d{2}:\d{2}|[AMP]+/g)
    .join(" ");

  console.log(date);

  function handleRemove(a: any) {
    dispatch(removeEvent(a));
  }

  console.log(events);

  return (
    <div className="device">
      <h1>Reminder</h1>
      <form onSubmit={handleEvent}>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />
        <button type="submit">teste</button>
      </form>
      <h1>{realTime}</h1>
      <ul>
        {events.map((event: any) => {
          if (event.time === realTime) {
            handleRemove(event);
            alert(`Time to complete ${event.event}`);
          }
          return (
            <li>
              {event.time} {event.event}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
