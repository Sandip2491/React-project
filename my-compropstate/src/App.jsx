import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Vite + React: Component + Props + State </h1>

      {/* Passing props to child component */}
      <Counter initialCount={5} name="Sandip" />
      <Counter initialCount={10} name="Patil" />
    </div>
  );
}

export default App;
