import React, { useState, useEffect } from 'react';
import "./app.css"

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup the timer on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="timer-container">
      <h1>Timer</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default Timer;