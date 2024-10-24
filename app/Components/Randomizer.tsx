"use client";
import { useState, useEffect } from "react";

const Randomizer = () => {
  const [count, setCount] = useState<number>(0); // Initialize count state variable with a value of 0
  const [countdown, setCountdown] = useState(0); // Countdown starts at 0 seconds

  // Function to return a random number from the array
  function gamba() {
    const Randomizer_arr: number[] = [1, 2, 3, 42, 5]; // Array of numbers to choose from
    return Randomizer_arr[Math.floor(Math.random() * Randomizer_arr.length)]; // Returns a random value
  }

  // Function to handle the click event
  const handleClick = () => {
    setCount(gamba()); // Update the count variable with the random value from gamba()
  };

  useEffect(() => {
    // Countdown logic
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown < 3) {
          return prevCountdown + 1; // Increment countdown
        } else {
          setCount(gamba()); // Choose a new random number when countdown resets
          return 0; // Reset the countdown when it reaches 3
        }
      });
    }, 1000); // Increment every second (1000ms)

    return () => {
      clearInterval(countdownInterval); // Clear the countdown interval when the component unmounts
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <div>
        {/* Displaying the countdown */}
        <h1>Countdown: {countdown} seconds</h1>
      </div>
      <p className="py-4">The number is {count}</p>
      <button onClick={handleClick}>Get Random Number</button>
    </>
  );
};

export default Randomizer;
