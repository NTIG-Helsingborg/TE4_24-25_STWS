"use client";
import { useState, useEffect } from 'react';

export default function Timer() {
  const [countdown, setCountdown] = useState(0); // Countdown starts at 0 seconds

  useEffect(() => {
    // Countdown logic
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown < 10) {
          return prevCountdown + 1;
        } else {
          return 0; // Reset the countdown when it reaches 10
        }
      });
    }, 1000); // Increment every second (1000ms)

    return () => {
      clearInterval(countdownInterval); // Clear the countdown interval when the component unmounts
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      {/* Displaying the countdown */}
      <h1>Countdown: {countdown} seconds</h1>
    </div>
  );
}
