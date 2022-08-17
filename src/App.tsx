import Clock from "./components/Clock";
import InputEvent from "./components/InputEvent";
import EventItem from "./components/Event";
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
