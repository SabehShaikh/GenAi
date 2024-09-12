"use client";

import { useState, ChangeEvent } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Tip Calculator Component
export default function TipCalculator() {
    // State for bill amount and tip percentage (initially null) and calculated values (initialized to 0)
    const [billAmount, setBillAmount] = useState<number | null>(null);
    const [tipPercentage, setTipPercentage] = useState<number | null>(null);
    const [tipAmount, setTipAmount] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    // Handle changes to bill amount input field
    const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setBillAmount(parseFloat(e.target.value)); // Convert input value to float
    };

    // Handle changes to tip percentage input field
    const handleTipPercentageChange = (
        e: ChangeEvent<HTMLInputElement>
    ): void => {
        setTipPercentage(parseFloat(e.target.value)); // Convert input value to float
    };

    // Calculate tip and total amount based on bill and tip percentage
    const calculateTip = (): void => {
        if (billAmount !== null && tipPercentage !== null) {
            const tip = billAmount * (tipPercentage / 100); // Calculate tip
            setTipAmount(tip); // Set tip amount in state
            setTotalAmount(billAmount + tip); // Set total amount (bill + tip) in state
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <CardHeader>
                    <CardTitle>Tip Calculator</CardTitle>
                    <CardDescription>
                        Enter the bill amount and tip percentage to calculate the tip and
                        total.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="bill-amount">Bill Amount</Label>
                        <Input
                            id="bill-amount"
                            type="number"
                            placeholder="Enter bill amount"
                            value={billAmount !== null ? billAmount : ""}
                            onChange={handleBillAmountChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="tip-percentage">Tip Percentage</Label>
                        <Input
                            id="tip-percentage"
                            type="number"
                            placeholder="Enter tip percentage"
                            value={tipPercentage !== null ? tipPercentage : ""}
                            onChange={handleTipPercentageChange}
                        />
                    </div>
                    <Button onClick={calculateTip}>Calculate</Button>
                </CardContent>
                <CardFooter className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <span>Tip Amount:</span>
                        <span className="font-bold">${tipAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Total Amount:</span>
                        <span className="font-bold">${totalAmount.toFixed(2)}</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}