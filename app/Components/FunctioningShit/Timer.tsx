"use client";
import { useState, useEffect, useRef } from "react"; // Import useRef

export default function Timer() {
  const [countdown, setCountdown] = useState<number>(0);
  const countdownRef = useRef<number>(0); // Use a ref for countdown

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      countdownRef.current += 1; // Increment ref value
      setCountdown(countdownRef.current); // Update state to trigger re-render

      if (countdownRef.current > 4) {
        countdownRef.current = 0; // Reset countdown ref
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      {/* Displaying the countdown */}
      <h1>Countdown: {countdown} seconds</h1>
    </div>
  );
}
