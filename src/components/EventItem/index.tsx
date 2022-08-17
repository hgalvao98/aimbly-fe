import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeEvent } from "../../actions";
import { motion } from "framer-motion";
import "./styles.css";

export default function EventItem() {
  const [delEvent, setDelEvent] = useState(false);
  const [date, setDate] = useState(new Date());
  const events: [] = useSelector((state: any) => state.events);

  const dispatch = useDispatch();
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

  function handleRemove(event: any) {
    dispatch(removeEvent(event));
  }

  const handleDelete = () => {
    setDelEvent(!delEvent);
  };

  console.log(events);
  return (
    <div className="event">
      <h3 className="event__subtitle">Upcoming alerts</h3>
      <ul className="event__list">
        {events.map((event: any, idx) => {
          if (event.time === realTime) {
            handleRemove(event);
            alert(`Time to complete ${event.event}`);
          }
          return (
            <motion.li onTap={handleDelete} key={idx} className="list__item">
              <div className="event__time">{event.time}</div>
              {event.event}
              {delEvent === true ? (
                <div>
                  <button
                    className="button__delete"
                    onClick={() => handleRemove(event)}
                  >
                    delete
                  </button>
                  <button>cancel</button>
                </div>
              ) : null}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
