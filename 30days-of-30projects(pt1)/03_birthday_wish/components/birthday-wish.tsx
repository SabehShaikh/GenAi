"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { FaBirthdayCake, FaGift } from "react-icons/fa";
import { GiBalloons } from "react-icons/gi";

type ConfettiProps = {
  width: number;
  height: number;
};

// Dynamic Import & Variables
const DynamicConfetti = dynamic(() => import("react-confetti"), { ssr: false });

const candleColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"];
const balloonColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"];
const confettiColors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
];

export default function BirthdayWish() {
  // State variables:

  // tracks the number of candles that have been lit, starting at 0.
  const [candlesLit, setCandlesLit] = useState<number>(0);

  //  tracks the number of candles that have been lit, starting at 0.
  const [balloonsPoppedCount, setBalloonsPoppedCount] = useState<number>(0);

  // controls whether confetti is displayed or not, initially set to false.
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  //  stores the current width and height of the window, which is important for displaying confetti correctly.
  const [windowSize, setWindowSize] = useState<ConfettiProps>({
    width: 0,
    height: 0,
  });

  // indicates whether the celebration has started, initially set to false.
  const [celebrating, setCelebrating] = useState<boolean>(false);

  // Constants:
  const totalCandles: number = 5;
  const totalBalloons: number = 5;

  // useEffect Hooks:
  useEffect(() => {
    // Function to update window size in state
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // This sets the initial size of the window when the component first mounts.

    // Add event listener to update size on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array means this effect runs only once when component mounts

  useEffect(() => {
    // Check if all candles are lit and balloons are popped
    if (candlesLit === totalCandles && balloonsPoppedCount === totalBalloons) {
      setShowConfetti(true); // Show confetti when both conditions are met
    }
  }, [candlesLit, balloonsPoppedCount]); // Runs whenever candlesLit or balloonsPoppedCount changes

  // Functions:

  const lightCandle = (index: number) => {
    // Check if the current index matches the number of candles lit
    if (index === candlesLit) {
      // If so, increment the number of lit candles by 1
      setCandlesLit((prev) => prev + 1);
    }
  };

  const popBalloon = (index: number) => {
    // Check if the current index matches the number of balloons popped
    if (index === balloonsPoppedCount) {
      // If so, increment the number of popped balloons by 1
      setBalloonsPoppedCount((prev) => prev + 1);
    }
  };

  const celebrate = () => {
    setCelebrating(true); // Start the celebration, set celebrating state to true
    setShowConfetti(true); // Show confetti when the celebration begins
    const interval = setInterval(() => {
      // Create an interval to light candles one by one
      setCandlesLit((prev) => {
        if (prev < totalCandles) return prev + 1; // If not all candles are lit, light the next one
        clearInterval(interval); // If all candles are lit, stop the interval
        return prev; // Return the current number of lit candles
      });
    }, 500); // Repeat the process every 500 milliseconds (0.5 seconds)
  };

  // JSX Return Statement:
  return (
    // Main container
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Animated wrapper for the card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Birthday card */}
        <Card className="mx-auto overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl border-2 border-black">
          {/* Card header with birthday message */}
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-black">
              Happy 21st Birthday!
            </CardTitle>
            <CardDescription className="text-2xl font-semibold text-gray-600">
              Sabeh Shaikh
            </CardDescription>
            <p className="text-lg text-gray-500">15th February</p>
          </CardHeader>
          {/* Card content with candles and balloons */}
          <CardContent className="space-y-6 text-center">
            {/* Candles section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Light the candles:
              </h3>
              <div className="flex justify-center space-x-2">
                {/* Map through candles */}
                {[...Array(totalCandles)].map((_, index) => (
                  <AnimatePresence key={index}>
                    {/* Render lit or unlit candle based on state */}
                    {(celebrating && index <= candlesLit) ||
                    (!celebrating && index < candlesLit) ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: celebrating ? index * 0.5 : 0,
                        }}
                      >
                        {/* Lit candle */}
                        <FaBirthdayCake
                          className={`w-8 h-8 transition-colors duration-300 ease-in-out cursor-pointer hover:scale-110`}
                          style={{
                            color: candleColors[index % candleColors.length],
                          }}
                          onClick={() => lightCandle(index)}
                        />
                      </motion.div>
                    ) : (
                      // Unlit candle
                      <FaBirthdayCake
                        className={`w-8 h-8 text-gray-300 transition-colors duration-300 ease-in-out cursor-pointer hover:scale-110`}
                        onClick={() => lightCandle(index)}
                      />
                    )}
                  </AnimatePresence>
                ))}
              </div>
            </div>
            {/* Balloons section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Pop the balloons:
              </h3>
              <div className="flex justify-center space-x-2">
                {/* Map through balloons */}
                {[...Array(totalBalloons)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 1 }}
                    animate={{ scale: index < balloonsPoppedCount ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Balloon icon */}
                    <GiBalloons
                      className={`w-8 h-8 cursor-pointer hover:scale-110`}
                      style={{
                        color:
                          index < balloonsPoppedCount
                            ? "#D1D5DB"
                            : balloonColors[index % balloonColors.length],
                      }}
                      onClick={() => popBalloon(index)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
          {/* Card footer with celebrate button */}
          <CardFooter className="flex justify-center">
            <Button
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300"
              onClick={celebrate}
              disabled={celebrating}
            >
              Celebrate! <FaGift className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      {/* Confetti component */}
      {showConfetti && (
        <DynamicConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={1000}
          colors={confettiColors}
        />
      )}
    </div>
  );
}
