"use client";
import { useState} from "react"; // Import useRef
import sampleData from "@/the_file_tm.json";
import Button from "../ReusableComponents/Button";
import { useRouter } from "next/navigation";
// Sample data generation logic
const data = Object.entries(
  sampleData as unknown as { [id: string]: [string, number][] }
)
  .map(([key, values]) => values.map(([_, id]) => {_.at(0);return `${key}:${id}`}))
  .flat(2);

// Randomizer component definition
const Randomizer = () => {
  const [count, setCount] = useState<string>("");

  const gamba = () => data[Math.floor(Math.random() * data.length)];
  const router = useRouter();

  const handleClick = async () => {
    const newCount = gamba();
    setCount(newCount);
    router.push(`/details/?query=${count}`);
  };

  return (
    <>
      <Button action={handleClick} text="Try me" />
    </>
  );
};

export default Randomizer;
