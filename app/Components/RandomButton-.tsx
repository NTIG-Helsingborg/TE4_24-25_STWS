/*"use client";
import { useState } from 'react';
import randarr from './randarr';

function Button() {
  const [value, setValue] = useState<number | null>(null); // Value can be a number or null initially

  function handleClick(): void {
    const randomValue: number = randarr(); // Get random number from randarr
    setValue(randomValue);                 // Update the state with the random value
  }

  return (
    <button
      className="btn"
      onClick={handleClick}
    >
      {value !== null ? value : "Click me"}
    </button>
  );
}

export default Button; */

import React from "react";

interface Props {
  action: () => void;
}

const Button = ({ action }: Props) => {
  return (
    <button className="btn" onClick={action}>
      Mother
    </button>
  );
};

export default Button;
