// components/Drawer.tsx
"use client";

import React, { useState } from "react";
import Button from "./Button";
import DrawerSSC from "./DrawerSSC";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button action={toggleDrawer} text="test" />
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <DrawerSSC action={toggleDrawer} />
      </div>
    </>
  );
};

export default Drawer;
