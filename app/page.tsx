import React from "react";
import Footer from "./Components/LayoutSHit/Footer";
import Hero from "./Components/LayoutSHit/Hero";
import Drawer from "./Components/LayoutSHit/Drawer";
import Randomizer from "./Components/FunctioningShit/Randomizer";
import PlaceholderContent from "./Components/TestShit/PlaceholderContent";
import Content from "./Components/TextCommponents/Content";

const test = () => {
  return (
    <div>
      <Hero />
      <Drawer>
        
          <Randomizer />
          <Content />

        
      </Drawer>
      <Footer />
    </div>
  );
};

export default test;
