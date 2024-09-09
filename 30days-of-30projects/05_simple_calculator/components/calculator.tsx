"use client";

import { useState, ChangeEvent } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function CalculatorComponent() {

    
    // State:
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<string>("");
    
    // to handle inputs:
    const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
        setNum1(e.target.value);
    }
    
    const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
        setNum2(e.target.value);
    }
    
    // functions:
    const addition = (): void =>{
        setResult((parseFloat(num1) + parseFloat(num2)).toString());
    }
    
    const subtraction = (): void => {
        setResult((parseFloat(num1) - parseFloat(num2)).toString());
    }

    const multiplication = (): void => {
        setResult((parseFloat(num1) * parseFloat(num2)). toString());
    }
    
    const division = (): void => {
        if( parseFloat(num2) !== 0){    
            setResult((parseFloat(num1) / parseFloat(num2)).toString());
        } else {
            setResult("Cannot divide by zero");
        }
    }
    
    const clearAll = (): void => {
        setNum1("");
        setNum2("");
        setResult("");
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
          {/* Center the calculator within the screen */}
          <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            {/* Card header with title */}
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Simple Calculator
              </CardTitle>
            </CardHeader>
            {/* Card content including inputs, buttons, and result display */}
            <CardContent className="space-y-4">
              {/* Input fields for numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="num1">Number 1</Label>
                  <Input
                    id="num1"
                    type="number"
                    value={num1}
                    onChange={handleNum1Change}
                    placeholder="Enter a number"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="num2">Number 2</Label>
                  <Input
                    id="num2"
                    type="number"
                    value={num2}
                    onChange={handleNum2Change}
                    placeholder="Enter a number"
                  />
                </div>
              </div>
              {/* Buttons for arithmetic operations */}
              <div className="grid grid-cols-4 gap-2">
                <Button
                  variant="outline"
                  className="text-2xl font-bold text-gray-700 dark:text-gray-300"
                  onClick={addition}
                >
                  +
                </Button>
                <Button
                  variant="outline"
                  className="text-2xl font-bold text-gray-700 dark:text-gray-300"
                  onClick={subtraction}
                >
                  -
                </Button>
                <Button
                  variant="outline"
                  className="text-2xl font-bold text-gray-700 dark:text-gray-300"
                  onClick={multiplication}
                >
                  *
                </Button>
                <Button
                  variant="outline"
                  className="text-2xl font-bold text-gray-700 dark:text-gray-300"
                  onClick={division}
                >
                  /
                </Button>
              </div>
              {/* Display the result */}
              <div className="flex flex-col space-y-2">
                <Label htmlFor="result">Result</Label>
                <Input
                  id="result"
                  type="text"
                  value={result}
                  placeholder="Result"
                  readOnly
                />
              </div>
              {/* Clear button to reset inputs and result */}
              <Button variant="outline" className="w-full" onClick={clearAll}>
                Clear
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }