import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);
  return (
    <div>
      <h1>Creating counter using useEffect</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      <h2>{calculation}</h2>
    </div>
  );
};

export default Counter;
