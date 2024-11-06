"use client";
import { useState, useEffect, useRef } from "react"; // Import useRef
import sampleData from "@/the_file_tm.json";
import Button from "../ReusableComponents/Button";
import { useRouter } from "next/navigation";
// Sample data generation logic
const data = Object.entries(
  sampleData as unknown as { [id: string]: [string, number][] }
)
  .map(([key, values]) => values.map(([_, id]) => `${key}:${id}`))
  .flat(2);

// Randomizer component definition
const Randomizer = () => {
  const [count, setCount] = useState<string>("");
  const [countdown, setCountdown] = useState<number>(0);
  const countdownRef = useRef<number>(0); // Use a ref for countdown

  const gamba = () => data[Math.floor(Math.random() * data.length)];
  const router = useRouter();

  const handleClick = async () => {
    const newCount = gamba();
    setCount(newCount);
    console.log(newCount);
    router.push(`/details/?query=${newCount}`);
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      countdownRef.current += 1; // Increment ref value
      setCountdown(countdownRef.current); // Update state to trigger re-render

      if (countdownRef.current > 4) {
        const newCount = gamba();
        setCount(newCount); // Update state with the new count
        countdownRef.current = 0; // Reset countdown ref
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <div>
        <h1>Countdown: {countdown} seconds</h1>
      </div>
      <p>{count}</p>
      <Button action={handleClick} text="click me" />
    </>
  );
};

export default Randomizer;
