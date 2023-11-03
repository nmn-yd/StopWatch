import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  function handleStop() {
    setSeconds(0);
    setStart((start) => !start);
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
      <p>
        {Math.floor(seconds / 3600) === 0
          ? `00`
          : Math.floor(seconds / 3600) > 0 && Math.floor(seconds / 3600) < 10
          ? `0${Math.floor(seconds / 3600)}`
          : Math.floor(seconds / 3600)}
        :
        {Math.floor(seconds / 60) === 0
          ? `00`
          : Math.floor(seconds / 60) > 0 && Math.floor(seconds / 60) < 10
          ? `0${Math.floor(seconds / 60)}`
          : Math.floor(seconds / 60)}
        :{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </p>
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
