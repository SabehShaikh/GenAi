"use client";
import ContactForm from "@/components/ContactForm";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  //  state variable, state updation function, state initial value(0)
  const [count, setCount] = useState(0);

  const [data, setData] = useState([]);

  // useRef --> to store a value that persists across renders,
  // and can be updated without causing a re-render
  const value = useRef(0);

  function handleIncrement() {
    let newValue = (value.current = value.current + 1);
    console.log("your value is:", newValue);

    setCount(newValue);
  }

  function handleDecrement() {
    if (value.current > 0) {
      let newValue = (value.current = value.current - 1);
      console.log("your value is:", newValue);
      setCount(newValue);
    }
  }

  // first ==> side effect
  // second ==> clean up
  // third ==> dependency

  //  (Variant-1) runs after every render if no
  // dependency array is provided:

  // useEffect(() => {
  //   alert("i will run on every render");
  // });

  // (Variant-2) runs only on first render:

  // useEffect(() => {
  //   alert("i will run on first render");
  // }, []);

  // (Variant-3) runs on first render and when count changes:

  // useEffect(() => {
  //   alert("i will run on first render and when count changes");
  // }, [count]);

  // (variant-4):
  // useEffect(() => {

  //   // then this function will run
  //   alert("i will run when count is updated");
  //   return () => {

  //     // first this function will run
  //     alert("i will run when count is unmounted");
  //   };
  // }, [count]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Time Started", count);  // yahan count ki latest value milegi
  //     setCount((prevCount) => prevCount + 1);  // functional update use kiya
  //   }, 1000);

  //   return () => {
  //     console.log("Time Stopped");
  //     clearInterval(interval);
  //   };
  // }, []); // Empty dependency array ka matlab hai ye sirf pehli baar run hoga

  // CLIENT SIDE DATA FETCHING:

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users/");

      console.log("data", data);

      const json = await data.json();

      setData(json);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ContactForm />

        <h1>Counter</h1>

        <button onClick={handleIncrement}>+</button>

        <p>{count}</p>

        {/* {data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })} */}

        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  );
}
