"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CloudIcon, MapPinIcon, ThermometerIcon } from "lucide-react";

// Define a TypeScript interface for weather data
interface WeatherData {
  temperature: number; // Stores the temperature value
  description: string; // Describes the current weather (e.g., "Sunny", "Rainy")
  location: string; // Stores the name of the location (city)
  unit: string; // Indicates the temperature unit (e.g., "C" for Celsius)
  localTime: string; // Stores the local time of the location
}

// Default export of the WeatherWidgetComponent function:
export default function WeatherWidgetComponent() {
  // State and References:
  // This holds the city name or location input by the user.
  const [location, setLocation] = useState<string>("");

  // This holds the weather data.
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // This holds the error message.
  const [error, setError] = useState<string | null>(null);

  // This holds the loading state.
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //
  const [unit, setUnit] = useState<"C" | "F">("C"); // Default to Celsius

  // Functions for Fetching and Displaying Weather Data:
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior that is to refresh/reload the page
    const trimmedLocation = location.trim(); // Trim any whitespace from the user's input

    if (trimmedLocation == "") {
      setError("Please enter a valid location."); // Set error message if input is empty
      setWeather(null); // Clear previous weather data
      return; // Exit function early if no valid input
    }

    setIsLoading(true); // Set loading state to true while fetching data
    setError(null); // Clear any previous error messages

    try {
      // Make API request to fetch weather data using the trimmed location
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${trimmedLocation}`
      );

      if (!response.ok) {
        throw new Error("City not found"); // Throw error if the city is not found
      }

      const data = await response.json(); // Parse the response as JSON

      // Create an object with the relevant weather data
      const weatherData: WeatherData = {
        temperature: data.current.temp_c, // Extract temperature in Celsius
        description: data.current.condition.text, // Extract weather description
        location: data.location.name, // Extract the location name
        unit: "C", // Set the temperature unit to Celsius
        localTime: data.location.localtime.split(" ")[1], // Extracting local time
      };

      setWeather(weatherData); // Update the weather state with the fetched data
    } catch (error) {
      console.error("Error fetching weather data:", error); // Log any errors to the console
      setError("City not found, please try again."); // Set error message if fetching fails
      setWeather(null); // Clear weather data if there's an error
    } finally {
      setIsLoading(false); // Reset loading state after the API call is complete
    }
  };

  //   Helper Functions:
  // Function to get a temperature message based on the temperature and unit:
  function getTemperatureMessage(temperature: number, unit: string): string {
    if (unit === "C") {
      if (temperature < 0) {
        return `It's freezing at ${temperature}°C! Bundle up!`;
      } else if (temperature < 10) {
        return `It's quite cold at ${temperature}°C. Wear warm clothes.`;
      } else if (temperature < 20) {
        return `The temperature is ${temperature}°C. Comfortable for a light jacket.`;
      } else if (temperature < 30) {
        return `It's a pleasant ${temperature}°C. Enjoy the nice weather!`;
      } else {
        return `It's hot at ${temperature}°C. Stay hydrated!`;
      }
    } else {
      // Convert to Fahrenheit if needed
      const fahrenheit = (temperature * 9) / 5 + 32;
      return `It's ${fahrenheit.toFixed(1)}°F.`;
    }
  }

  // Function to get a weather message based on the weather description:
  function getWeatherMessage(description: string): string {
    switch (description.toLowerCase()) {
      case "sunny":
        return "The weather is sunny. Enjoy your day!";
      case "partly cloudy":
        return "Expect some clouds and sunshine.";
      case "cloudy":
        return "The weather is cloudy";
      case "overcast":
        return "The sky is overcast";
      case "rain":
        return "Don't forget your umbrella! It's raining!";
      case "thunderstorm":
        return "Thunderstorms are expected! Be careful!";
      case "snow":
        return "It is snowing.";
      case "mist":
        return "It's misty outside.";
      case "fog":
        return "Be careful, there's fog outside.";
      case "haze":
        return "Be careful, there's haze outside.";
      default:
        return description;
    }
  }

  // Function to get a location message based on the current time:
  function getLocationMessage(location: string, localTime: string): string {
    const hour = Number(localTime.split(":")[0]); // Extract the hour from localTime

    // Determine the part of the day based on the hour
    let timeOfDay: string;
    if (hour >= 6 && hour < 12) {
      timeOfDay = "in the Morning";
    } else if (hour >= 12 && hour < 18) {
      timeOfDay = "in the Afternoon";
    } else if (hour >= 18 && hour < 21) {
      timeOfDay = "in the Evening";
    } else {
      timeOfDay = "at Night";
    }

    return `${location} ${timeOfDay}`;
  }

  // JSX return statement rendering the weather widget UI
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Center the card within the screen */}

      <Card className="w-full max-w-md mx-auto text-center">
        {/* Card header with title and description */}

        <CardHeader>
          <CardTitle>Weather Widget</CardTitle>

          <CardDescription>
            Search for the current weather conditions in your city.
          </CardDescription>
        </CardHeader>

        {/* Card content including the search form and weather display */}

        <CardContent>
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Enter a city name"
              value={location}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Search"}
            </Button>
          </form>

          {error && <div className="mt-4 text-red-500">{error}</div>}

          {weather && (
            <div className="mt-4 grid gap-2">
              {/* Display temperature message with icon */}
              <div className="flex items-center gap-2">
                <ThermometerIcon className="w-6 h-6" />
                {getTemperatureMessage(weather.temperature, unit)}{" "}
                {/* Use unit state */}
              </div>

              {/* Display weather description message with icon */}
              <div className="flex items-center gap-2">
                <CloudIcon className="w-6 h-6" />
                <div>{getWeatherMessage(weather.description)}</div>
              </div>

              {/* Display location message with icon */}
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-6 h-6" />
                <div>
                  {getLocationMessage(weather.location, weather.localTime)}
                </div>
              </div>
            </div>
          )}
          {/* Temperature Unit Toggle Button */}
          <Button
            onClick={() => setUnit(unit === "C" ? "F" : "C")}
            className="mt-4 px-4 py-2 text-white rounded"
          >
            Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
