// Enables client-side rendering for this component.
"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// State Definition:

// Defines the structure of the state for a number guessing game.
interface NumberGuessingState {
  // indicating if the game has started.
  gameStarted: boolean;

  // indicating if the game is over.
  gameOver: boolean;

  // indicating if the game is paused.
  paused: boolean;

  // representing the target number to be guessed.
  targetNumber: number;

  // representing the user's current guess.
  userGuess: number | string;

  // representing the number of attempts made.
  attempts: number;
}

// State and References:

// indicating if the game has started.
const [gameStarted, setGameStarted] = useState<boolean>(false);

//  indicating if the game is over.
const [gameOver, setGameOver] = useState<boolean>(false);

// indicating if the game is paused.
const [paused, setPaused] = useState<boolean>(false);

// representing the target number to be guessed, initialized as 0.
const [targetNumber, setTargetNumber] = useState<number>(0);

// representing the user's current guess, initialized as 0.
const [userGuess, setUserGuess] = useState<number | string>("");

// representing the number of attempts made, initialized as 0.
const [attempts, setAttempts] = useState<number>(0);

// Effect Hook for Target Number:
// This effect runs when the game starts or resumes. It generates a random number
// between 1 and 10 and updates the target number state.
useEffect(() => {
  if (gameStarted && !paused) {
    const randomNumber: number = Math.floor(Math.random() * 10) + 1;
    setTargetNumber(randomNumber);
  }
}, [gameStarted, paused]);

// Start Game Function:

const handleStartGame = (): void => {
  setGameStarted(true);
  setGameOver(false);
  setPaused(false);
  setAttempts(0);
};

// Pauses the game by setting the paused state to true.
const handlePauseGame = (): void => {
  setPaused(true);
};

// Resumes the game by setting the paused state to false.
const handleResumeGame = (): void => {
  setPaused(false);
};

