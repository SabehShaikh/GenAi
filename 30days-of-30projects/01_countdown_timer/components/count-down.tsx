"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
        setIsActive(false)
        setIsPaused(true)
        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
    }
}

const handleReset = (): void => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(typeof duration === "number" ? duration : 0);
    if (timerRef.current) {
        clearInterval(timerRef.current);
    }
}


