"use client";
import { useState, useEffect, useRef } from "react"; // Import useRef
import sampleData from "@/the_file_tm.json";
import Button from "./Button";
import { updateCard } from "@/app/Components/ServerAction"; // Import the server action
import Converter from "./Converter";

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

  const handleClick = async () => {
    const newCount = gamba();
    setCount(newCount);
    await updateCard(newCount); // Call the server action and await its completion
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      countdownRef.current += 1; // Increment ref value
      setCountdown(countdownRef.current); // Update state to trigger re-render

      if (countdownRef.current > 4) {
        const newCount = gamba();
        setCount(newCount); // Update state with the new count
        updateCard(newCount); // Call server action
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
      <p>{count}</p>¨
      <Converter
        itemID={count}
        src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
      />
      <Button action={handleClick} text="click me" />
    </>
  );
};

export default Randomizer;
