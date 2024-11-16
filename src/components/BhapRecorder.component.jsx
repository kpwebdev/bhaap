import { useRef, useState } from "react";
import Timer from "./Timer.component";
import Records from "./Records.component";

let records = null;

function BhapRecorder({ records, setRecords }) {
  const [startTime, setStartTime] = useState(new Date());
  const [duration, setDuration] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [didStart, setDidStart] = useState(false);
  const [bottle, setBottle] = useState("");
  const intervalIdRef = useRef(null);

  const handleBottleChange = (e) => {
    setBottle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bottle) return;

    clearInterval(intervalIdRef.current);

    const newTime = new Date();
    const record = {
      id: newTime.getTime(),
      bottle,
      duration,
      time: newTime,
    };

    const newRecords = [record, ...records];
    setRecords(newRecords);
    localStorage.setItem("records", JSON.stringify(newRecords));

    console.log("record", record);
    if (records) {
    } else {
      records = [];
    }

    setStartTime(new Date());
    setDuration(0);
    setBottle("");
    setDidStart(false);
    setIsPause(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bhaap-recorder">
        {/* types of bottles */}
        <p>
          <label htmlFor="bottleType" hidden>
            Bottle:
          </label>
          <select
            name="bottleType"
            id="bottleType"
            value={bottle}
            onChange={handleBottleChange}
            disabled={bottle !== "" && didStart && !isPause}
          >
            <option value="" disabled>
              Select Bottle
            </option>
            <option value="red">Red 🔴</option>
            <option value="blue">Blue 🔵</option>
            <option value="glass">Glass 👓</option>
            <option value="black">Black ⚫</option>
          </select>
        </p>
        <Timer
          startTime={startTime}
          setStartTime={setStartTime}
          duration={duration}
          setDuration={setDuration}
          intervalIdRef={intervalIdRef}
          handleSubmit={handleSubmit}
          isPause={isPause}
          setIsPause={setIsPause}
          didStart={didStart}
          setDidStart={setDidStart}
        />
      </form>
    </>
  );
}

export default BhapRecorder;
