import React from "react";
import Randomizer from "./Randomizer"; // Client component
import Display from "./Display"; // Server component
import { getMessage } from "./ServerAction";

const ParentComponent = async () => {
  const count = await getMessage();
  return (
    <div>
      <Randomizer /> {/* Randomizer is responsible for generating counts */}
      {/* The Display component will be updated based on whatever logic you implement */}
      {/* Initial placeholder, can be updated later */}
      <Display />
    </div>
  );
};

export default ParentComponent;
