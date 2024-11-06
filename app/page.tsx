import React from "react";
import Footer from "./Components/LayoutSHit/Footer";
import Hero from "./Components/LayoutSHit/Hero";
import Drawer from "./Components/LayoutSHit/Drawer";
import Randomizer from "./Components/FunctioningShit/Randomizer";
import PlaceholderContent from "./Components/TestShit/PlaceholderContent";

const test = () => {
  return (
    <div>
      <Hero />
      <Drawer>
        <>
          <PlaceholderContent />
          <Randomizer />
        </>
      </Drawer>
      <Footer />
    </div>
  );
};

export default test;
