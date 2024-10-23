"use client";
import React from "react";
import { IconType } from "react-icons";

interface BtnProps {
  action: () => void;
  text?: string;
  class?: string;
  image?: IconType;
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
