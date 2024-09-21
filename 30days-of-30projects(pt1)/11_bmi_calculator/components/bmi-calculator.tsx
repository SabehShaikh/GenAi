"use client";

import { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// Define a TypeScript interface for the BMI result
interface BmiResult {
  bmi: string;
  category: string;
}

export default function BmiCalculator() {
  // states to manage the values of height, weight, result, and error
  const [height, setHeight] = useState<string>("0");
  const [weight, setWeight] = useState<string>("0");
  const [result, setResult] = useState<BmiResult | null>(null);
  const [error, setError] = useState<string>("");

  // function to handle changes in the height input field
  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setHeight(e.target.value); // update height state with the input value
  };

  // function to handle changes in the weight input field
  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setWeight(e.target.value); // update weight state with the input value
  };

  // function to calculate the BMI based on height and weight
  const calculateBmi = (): void => {
    // check if height and weight are provided
    if (!height || !weight) {
      setError("Please enter your height and weight");
      return; // stop the function if either is missing
    }

    // convert height from cm to meters
    const heightInMeters = parseFloat(height) / 100;
    if (heightInMeters <= 0) {
      setError("Height must be a positive number."); // validate height
      return; // stop the function if height is invalid
    }

    // convert weight to a number and validate
    const weightInKg = parseFloat(weight);
    if (weightInKg <= 0) {
      setError("Weight must be a positive number."); // validate weight
      return; // stop the function if weight is invalid
    }

    // calculate the BMI using the formula: weight / (height^2)
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    let category = "";

    // determine the BMI category based on the calculated value
    if (bmiValue < 18.5) {
      category = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      category = "Normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    // store the result with the BMI value and category
    setResult({ bmi: bmiValue.toFixed(1), category });
    setError(""); // clear any previous errors
  };
  // JSX return statement rendering the BMI calculator UI
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Center the BMI calculator card within the screen */}
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          {/* Header with title and description */}
          <CardTitle>BMI Calculator</CardTitle>
          <CardDescription>
            Enter your height and weight to calculate your BMI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input for height */}
          <div className="grid gap-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          {/* Input for weight */}
          <div className="grid gap-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          {/* Button to calculate BMI */}
          <Button onClick={calculateBmi}>Calculate</Button>
          {/* Display error message if any */}
          {error && <div className="text-red-500 text-center">{error}</div>}
          {/* Display BMI result if available */}
          {result && (
            <div className="grid gap-2">
              <div className="text-center text-2xl font-bold">{result.bmi}</div>
              <div className="text-center text-muted-foreground">
                {result.category}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
