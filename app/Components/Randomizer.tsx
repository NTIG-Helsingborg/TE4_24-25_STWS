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
      {/* detta ska inte vara här, gör ny component

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      */}
    </>
  );
};

export default Randomizer;
