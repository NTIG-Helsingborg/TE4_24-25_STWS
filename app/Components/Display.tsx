import React from "react";
import Converter from "./Converter";
import { getMessage } from "./ServerAction";

const Display = async () => {
  let count;

  try {
    count = await getMessage();

    // Check if `count` is a non-empty string
    if (!count || count.trim() === "") {
      throw new Error("Invalid count data: empty or undefined");
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
    count = "planets:1"; // Use a default or fallback string
  }

  console.log(count + " ah");

  return (
    <div>
      <Converter
        itemID={count}
        src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
      />
    </div>
  );
};

export default Display;
