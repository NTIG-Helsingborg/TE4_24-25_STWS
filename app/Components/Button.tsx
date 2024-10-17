"use client";
import React from "react";

interface BtnProps {
  action: () => void;
  text: string;
  class?: string;
}

const Button = ({ action, text }: BtnProps) => {
  return (
    <div>
      {/* Button to open the drawer */}
      <button className="btn" onClick={action}>
        {text}
      </button>
    </div>
  );
};

export default Button;
