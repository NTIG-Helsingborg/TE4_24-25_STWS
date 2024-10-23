"use client";
import React, { useState } from "react";

import Button from "./RandomButton";

const Randomizer = () => {
  const [count, setCount] = useState<number>(0); //initserar state variablen med ett värde av 0

  function gamba() {
    const Randomizer_arr: number[] = [1, 2, 3, 42, 5]; //väljer ett random tal från denna arrayn
    return Randomizer_arr[Math.floor(Math.random() * Randomizer_arr.length)]; //ger tillbaka ett random värde
  }

  // Function to handle the click event
  const handleClick = () => {
    // Update the count state by setting it to a random number from gamba()
    setCount(gamba()); //updaterar count variablen med vad gamba funktionen
  };

  return (
    <>
      <Button action={handleClick} /> {/*tar in en funktion som sker onClick*/}
      <p className="py-4">The number is {count}</p>
    </>
  );
};

export default Randomizer;
