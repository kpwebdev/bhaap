import { useState } from "react";

import { getDiff, formatTime, formatNum } from "../utils";

function Timer({
  startTime,
  setStartTime,
  duration,
  setDuration,
  intervalIdRef,
  handleSubmit,
  isPause,
  setIsPause,
  didStart,
  setDidStart,
}) {
  const tick = (time) => {
    clearInterval(intervalIdRef.current);

    intervalIdRef.current = "Random";

    intervalIdRef.current = setInterval(() => {
      setDuration(getDiff(time));
    }, 1000);
  };

  const startTimer = () => {
    setStartTime((prevState) => {
      const newTime = new Date();
      tick(newTime);

      setDidStart(true);

      return newTime;
    });
  };

  const pauseTimer = () => {
    clearInterval(intervalIdRef.current);
    setIsPause(true);
  };

  const resumeTimer = () => {
    setIsPause(() => {
      setStartTime(() => {
        const newTime = new Date().getTime();
        const newTimeWithDiff = new Date(newTime - duration);
        tick(newTimeWithDiff);
        return newTimeWithDiff;
      });
      return false;
    });
  };

  const stopTimer = () => {};

  return (
    <>
      <div className="timer">
        <p hidden>Time Passed:</p>
        <time>{formatTime(duration)}</time>
      </div>
      <div className="btn-group">
        {!didStart && (
          <button className="start" type="button" onClick={startTimer}>
            Start
          </button>
        )}
        {isPause ? (
          <button className="resume" type="button" onClick={resumeTimer}>
            Resume
          </button>
        ) : (
          <button className="pause" type="button" onClick={pauseTimer}>
            Pause
          </button>
        )}

        <button className="stop" type="button" onClick={handleSubmit}>
          Done
        </button>
      </div>
    </>
  );
}

export default Timer;
