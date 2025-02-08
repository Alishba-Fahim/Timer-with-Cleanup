import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  return (
    <div className="timer-container">
      <h1>Timer</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default Timer;
