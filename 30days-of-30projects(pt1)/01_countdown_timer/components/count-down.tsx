"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Countdown() {
  // The duration is the time the user sets
  const [duration, setDuration] = useState<number | string>("");
  // The time left is the time left until the timer is done
  const [timeLeft, setTimeLeft] = useState<number>(0);
  // isActive tells us if the timer is running
  const [isActive, setIsActive] = useState<boolean>(false);
  // isPaused tells us if the timer is paused
  const [isPaused, setIsPaused] = useState<boolean>(false);
  // timerRef helps us store the timer ID so we can control the interval.
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  // if the user wants to use the dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // Speed factor for the timer
  const [speed, setSpeed] = useState<number>(1);

  // Functions for Timer Control:

  /* Initializes the timer duration and ensures
   it's ready for a new countdown. */
  const handleSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration);
      setIsActive(false);
      setIsPaused(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  // Starts the countdown if there’s remaining time.
  const handleStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  // Pauses the countdown:
  const handlePause = (): void => {
    if (isActive) {
      setIsActive(false);
      setIsPaused(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  // Resets the timer:
  const handleReset = (): void => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(typeof duration === "number" ? duration : 0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // For changing the theme
  const handleToggleMode = (): void => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // For changing the speed
  const handleSpeedChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSpeed(Number(e.target.value));
  };

  // useEffect for Countdown Logic:
  useEffect(() => {
    // Check if the timer is active and not paused
    if (isActive && !isPaused) {
      // Start the countdown by setting an interval to run every second (1000 ms)
      timerRef.current = setInterval(() => {
        // Update the time left by decrementing the previous time by the speed factor
        setTimeLeft((prevTime) => {
          // If the time left is 1 second or less, clear the interval (stop the timer)
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            alert("Time's up!"); 
            return 0; // Set time left to 0
          }
          return Math.max(prevTime - speed, 0); // Otherwise, reduce the time left by speed
        });
      }, 1000 / speed); // Adjust interval based on speed
    }

    // Cleanup function to clear the interval when the component unmounts or updates
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current); // Clear the interval to stop the timer
      }
    };
  }, [isActive, isPaused, speed]);
  // Dependencies: Re-run the effect if isActive or isPaused or speed changes

  // Helper Functions:

  // Format time from seconds to "MM:SS" string
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // Convert numbers to strings, pad with zeros if needed, and return "MM:SS" format
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  // Handle changes in the duration input field
  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value) || "");
  };

  return (
    // Container div for centering the content
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Timer box container */}
      <div
        className={`bg-white ${
          isDarkMode ? "bg-gray-800" : "bg-gray-200"
        } shadow-lg rounded-lg p-8 w-full max-w-md`}
      >
        {/* Title of the countdown timer */}
        <h1
          className={`text-2xl font-bold mb-4 ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          } text-center`}
        >
          Countdown Timer
        </h1>
        {/* Input and set button container */}
        <div className="flex items-center mb-6">
          <Input
            type="number"
            id="duration"
            placeholder="Enter duration in seconds"
            value={duration}
            onChange={handleDurationChange}
            className={`flex-1 mr-4 rounded-md border-gray-300 ${
              isDarkMode
                ? "dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                : "border-gray-300"
            }`}
          />
          <Button
            onClick={handleSetDuration}
            variant="outline"
            className={`text-gray-800 ${
              isDarkMode ? "dark:text-gray-200" : "text-gray-800"
            }`}
          >
            Set
          </Button>
        </div>
        {/* Display the formatted time left */}
        <div
          className={`text-6xl font-bold mb-8 text-center ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {formatTime(timeLeft)}
        </div>

        {/* Buttons to start, pause, and reset the timer */}
        <div className="flex justify-center gap-4 mb-6">
          <Button
            onClick={handleStart}
            variant="outline"
            className={`text-gray-800 ${
              isDarkMode ? "dark:text-gray-200" : "text-gray-800"
            }`}
          >
            {isPaused ? "Resume" : "Start"}
          </Button>
          <Button
            onClick={handlePause}
            variant="outline"
            className={`text-gray-800 ${
              isDarkMode ? "dark:text-gray-200" : "text-gray-800"
            }`}
          >
            Pause
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className={`text-gray-800 ${
              isDarkMode ? "dark:text-gray-200" : "text-gray-800"
            }`}
          >
            Reset
          </Button>
        </div>

        {/* Toggle between light and dark mode */}
        <div className="flex justify-center gap-4 mb-6">
          <Button
            onClick={handleToggleMode}
            variant="outline"
            className={`rounded-full border ${
              isDarkMode
                ? "bg-gray-800 text-gray-200"
                : "bg-gray-200 text-gray-800"
            } p-2`}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>

          {/* Dropdown menu to change the speed of the timer */}
          <select
            onChange={handleSpeedChange}
            value={speed}
            className={`border rounded-md p-2 ${
              isDarkMode ? "dark:bg-gray-700 dark:text-gray-200" : "bg-white"
            }`}
          >
            <option value={0.5}>0.5x</option>
            <option value={1}>1x</option>
            <option value={2}>2x</option>
          </select>
        </div>
      </div>
    </div>
  );
}
