import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeEvent } from "../../actions";
import { motion } from "framer-motion";
import "./styles.css";

export default function EventItem() {
  const [delEvent, setDelEvent] = useState(false);
  const [date, setDate] = useState(new Date());
  const events: [] = useSelector((state: any) => state.events);
  const reverseEventsOrder = [...events].reverse();

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

  const handleDelete = (event: any) => {
    setDelEvent(!delEvent);
  };

  return (
    <div className="event">
      <h3 className="event__subtitle">Upcoming alerts</h3>
      <ul className="event__list">
        {reverseEventsOrder.map((event: any, idx) => {
          if (event.time === realTime) {
            handleRemove(event);
            alert(`Time to complete ${event.event}`);
          }
          return (
            <li
              onClick={() => handleDelete(event)}
              key={idx}
              className="list__item"
              style={{ backgroundColor: !delEvent ? "#1D1D1D" : "#7B2828" }}
            >
              <div className="event__time">{event.time}</div>
              {delEvent === true ? (
                <motion.div
                  className="button__options"
                  key={idx}
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <button
                    className="button__delete"
                    onClick={() => dispatch(removeEvent(event))}
                  >
                    Delete
                  </button>
                  <button className="button__cancel">Cancel</button>
                </motion.div>
              ) : (
                <div>{event.event}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
