import Clock from "./components/Clock";
import InputEvent from "./components/InputEvent";
import EventItem from "./components/EventItem";
import "./App.css";

export default function App() {
  return (
    <div className="device">
      <Clock />
      <InputEvent />
      <EventItem />
    </div>
  );
}
