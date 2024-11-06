import React from "react";
import Footer from "./Components/LayoutSHit/Footer";
import Hero from "./Components/LayoutSHit/Hero";
import Drawer from "./Components/LayoutSHit/Drawer";
import Randomizer from "./Components/FunctioningShit/Randomizer";

const test = () => {
  return (
    <div>
      <Hero />
      <Drawer>
        <>
          <Randomizer />
        </>
      </Drawer>
      <Footer />
    </div>
  );
};

export default test;
