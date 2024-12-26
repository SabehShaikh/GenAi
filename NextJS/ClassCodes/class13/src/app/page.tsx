"use client";
import { useState, useEffect } from "react";

export default function Home() {
  //  state variable, state updation function, state initial value(0)
  const [count, setCount] = useState(0);

  // first ==> side effect
  // second ==> clean up
  // third ==> dependency

  // runs after every render if no dependency array is provided.

  // useEffect(() => {
  //   alert("i will run on every render");
  // });

  // runs only on first render
  // useEffect(() => {
  //   alert("i will run on first render");
  // }, []);

  // runs on first render and when count changes
  useEffect(() => {
    alert("i will run on first render and when count changes");
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Counter</h1>

      <button onClick={() => setCount(count + 1)}>+</button>

      <p>{count}</p>

      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
    </div>
  );
}
