"use client";
import { useState, useEffect } from "react";

export default function Home() {
  //  state variable, state updation function, state initial value(0)
  const [count, setCount] = useState(0);

  // first ==> side effect
  // second ==> clean up
  // third ==> dependency

  // runs after every render if no dependency array is provided.
  useEffect(() => {
    alert("i will run on every render");
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Counter</h1>

      <button onClick={() => setCount(count + 1)}>+</button>

      <p>{count}</p>

      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
    </div>
  );
}
