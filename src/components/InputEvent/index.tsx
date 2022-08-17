import React, { useState } from "react";
import { addEvent } from "../../actions";
import { useDispatch } from "react-redux";
import "./styles.css";

const InputEvent = () => {
  const [event, setEvent] = useState("");
  const [time, setTime] = useState("00:00");
  const dispatch = useDispatch();

  const handleEvent = (e: any) => {
    e.preventDefault();
    dispatch(addEvent(time, event));
  };

  return (
    <form className="form" onSubmit={handleEvent}>
      <div className="form__inputs">
        <input
          className="form__time"
          type="time"
          value={time}
          placeholder="0"
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          className="form__event"
          placeholder="Add your event description here"
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />
      </div>
      <button className="form__button" type="submit">
        Add event
      </button>
    </form>
  );
};

export default InputEvent;
