import React from "react";
import ClockImg from "../../assets/Clock.png";
import "./styles.css";

export default function Clock() {
  return (
    <div className="clock">
      <img src={ClockImg} alt="Clock" />
    </div>
  );
}
