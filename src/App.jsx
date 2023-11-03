import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  function handleStop() {
    setSeconds(0);
    setStart(false);
  }

  useEffect(() => {
    let i;
    if (start) {
      i = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(i);
    }

    return () => {
      clearInterval(i);
    };
  }, [start]);
  return (
    <div className="main-heading">
      <h1>STOPWATCH</h1>
      <p>{`${formattedHours}:${formattedMinutes}:${formattedSeconds}`}</p>
      <div className="buttons">
        <button
          onClick={() => {
            setStart((start) => !start);
          }}
          className="button"
        >
          START
        </button>
        <button
          onClick={() => {
            setStart((start) => !start);
          }}
          className="button"
        >
          STOP
        </button>
        <button onClick={handleStop} className="button">
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
