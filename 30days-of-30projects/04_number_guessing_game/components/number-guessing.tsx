// Enables client-side rendering for this component.
"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NumberGuessing(): JSX.Element {
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

  // showing the message, after correct guess.
  const [message, setMessage] = useState<string>(""); // New state for the message

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

  // Checks the user's guess against the target number and updates the game state.
  const handleGuess = (): void => {
    // Increment attempts regardless of whether the guess is correct or not
    const newAttempts = attempts + 1;

    // If the guess is a number and matches the target number, end the game.
    if (typeof userGuess === "number" && userGuess === targetNumber) {
      setMessage("Congratulations, you guessed correctly!"); // Set success message

      setGameOver(true);
      setAttempts(newAttempts); // Set the final attempts count
    }
    // If the guess is incorrect, increment the attempts counter.
    else {
      setAttempts(attempts + 1);
      setMessage("Incorrect guess, try again!"); // Optionally set a message for incorrect guess
    }
  };

  // Resets the game state to allow the user to try again from the start.
  const handleTryAgain = (): void => {
    // Reset the game state, clearing all inputs and starting fresh.
    setGameStarted(false);
    setGameOver(false);
    setUserGuess("");
    setAttempts(0);
    setMessage(""); // Clear the message when restarting
  };

  // Handles the change in the user's guess input field.
  const handleUserGuessChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // Parse the input value as an integer and update the userGuess state.
    setUserGuess(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-black">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">
          Number Guessing Game
        </h1>
        <p className="text-center text-black mb-4">
          Try to guess the number between 1 and 10!
        </p>

        {!gameStarted && (
          <div className="flex justify-center mb-4">
            <Button
              onClick={handleStartGame}
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Start Game
            </Button>
          </div>
        )}

        {gameStarted && !gameOver && (
          <div>
            <div className="flex justify-center mb-4">
              {paused ? (
                <Button
                  onClick={handleResumeGame}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                >
                  Resume
                </Button>
              ) : (
                <Button
                  onClick={handlePauseGame}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                >
                  Pause
                </Button>
              )}
            </div>

            <div className="flex justify-center mb-4">
              <Input
                type="number"
                value={userGuess}
                onChange={handleUserGuessChange}
                className="bg-gray-100 border text-gray-900 border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
                placeholder="Enter your guess"
              />
              <Button
                onClick={handleGuess}
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded ml-4"
              >
                Guess
              </Button>
            </div>

            <div className="text-center text-black">
              <p>Attempts: {attempts}</p>
            </div>

            {message && (
              <div className="text-center text-black mb-4">
                <p>{message}</p>
              </div>
            )}
          </div>
        )}

        {gameOver && (
          <div>
            <div className="text-center mb-4 text-black">
              <h2 className="text-2xl font-bold">Game Over!</h2>
              {message && <p>{message}</p>}{" "}
              {/* Display the message only if it's set */}
              <p>
                You guessed the number in {attempts}{" "}
                {attempts === 1 ? "attempt" : "attemps"}.
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={handleTryAgain}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Try Again
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
