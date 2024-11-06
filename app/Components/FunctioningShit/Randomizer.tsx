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

  return (
    <>
      <Button action={handleClick} text="click me" />
    </>
  );
};

export default Randomizer;
