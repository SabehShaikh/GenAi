"use client";
import { useState, ChangeEvent } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox, CheckedState } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function PasswordGenerator() {
  // State hooks for controlling the form and storing generated password
  const [length, setLength] = useState<number>(16); // Password length, initialized to 16
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true); // Whether to include uppercase letters
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true); // Whether to include lowercase letters
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true); // Whether to include numbers
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true); // Whether to include symbols
  const [password, setPassword] = useState<string>(""); // The generated password string

  // Function to handle length input change
  const handleLengthChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLength(Number(e.target.value)); // Update the password length state
  };

  // Reusable function to handle checkbox state changes
  const handleCheckboxChange =
    (
      setter: (value: boolean) => void // Takes a setter function
    ) =>
    (checked: CheckedState): void => {
      // Handles checkbox changes
      if (typeof checked === "boolean") {
        setter(checked); // Update the respective state if checked is a boolean
      }
    };

  // Password Generation Function
  const generatePassword = (): void => {
    // Define character sets
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"; // Lowercase letters
    const numberChars = "0123456789"; // Numbers
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=\\"; // Symbols

    let allChars = ""; // Initialize character pool
    if (includeUppercase) {
      allChars += uppercaseChars; // Add uppercase letters if selected
    }
    if (includeLowercase) {
      allChars += lowercaseChars; // Add lowercase letters if selected
    }
    if (includeNumbers) {
      allChars += numberChars; // Add numbers if selected
    }
    if (includeSymbols) {
      allChars += symbolChars; // Add symbols if selected
    }

    let generatedPassword = ""; // Initialize password string
    // Loop through the desired length and randomly select characters from the pool
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * allChars.length); // Get a random index
      generatedPassword += allChars[index]; // Append the character at the random index to the password
    }
    setPassword(generatedPassword); // Update the password state with the generated one
  };

  // Clipboard Copy Function
  const copyToClipboard = (): void => {
    // Copy the generated password to the clipboard
    navigator.clipboard.writeText(password).then(
      () => {
        alert("Password copied to clipboard!"); // Alert success message
      },
      (err) => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy password to clipboard."); // Alert failure message if the copy fails
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="mx-auto max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Password Generator</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Create a secure password with just a few clicks.
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="length">Password Length</Label>
              <Input
                id="length"
                type="number"
                min="8"
                max="32"
                value={length}
                onChange={handleLengthChange}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label>Include:</Label>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="uppercase"
                  checked={includeUppercase}
                  onCheckedChange={handleCheckboxChange(setIncludeUppercase)}
                />
                <Label htmlFor="uppercase">Uppercase Letters</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="lowercase"
                  checked={includeLowercase}
                  onCheckedChange={handleCheckboxChange(setIncludeLowercase)}
                />
                <Label htmlFor="lowercase">Lowercase Letters</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="numbers"
                  checked={includeNumbers}
                  onCheckedChange={handleCheckboxChange(setIncludeNumbers)}
                />
                <Label htmlFor="numbers">Numbers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="symbols"
                  checked={includeSymbols}
                  onCheckedChange={handleCheckboxChange(setIncludeSymbols)}
                />
                <Label htmlFor="symbols">Symbols</Label>
              </div>
            </div>
            <Button type="button" className="w-full" onClick={generatePassword}>
              Generate Password
            </Button>
            <div className="space-y-2">
              <Label htmlFor="password">Generated Password</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="password"
                  type="text"
                  value={password}
                  readOnly
                  className="flex-1"
                />
                <Button type="button" onClick={copyToClipboard}>
                  Copy to Clipboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
