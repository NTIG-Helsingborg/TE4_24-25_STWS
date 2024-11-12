"use client";
import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [countdown, setCountdown] = useState<number>(1000); // Start at 100
  const countdownRef = useRef<number>(1000); // Initialize ref at 100

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdownRef.current > 0) {
        countdownRef.current -= 1; // Decrement ref value
        setCountdown(countdownRef.current); // Update state to trigger re-render
      } else {
        clearInterval(countdownInterval); // Stop interval when it reaches zero
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="ms-8">
      <h1>OMINOUS COUNTDOWN: {countdown} seconds </h1>
      <span>do not ignore</span>
    </div>
  );
}
