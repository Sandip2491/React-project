import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.initialCount);

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>Hello, {props.name} </h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment ➕</button>
      <button onClick={() => setCount(count - 1)}>Decrement ➖</button>
      <button onClick={() => setCount(props.initialCount)}>Reset 🔄</button>
    </div>
  );
}

export default Counter;
