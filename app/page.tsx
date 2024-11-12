import React from "react";
import Footer from "./Components/LayoutSHit/Footer";
import Hero from "./Components/LayoutSHit/Hero";
import Drawer from "./Components/LayoutSHit/Drawer";
import Randomizer from "./Components/FunctioningShit/Randomizer";

import Timer from "./Components/FunctioningShit/Timer";
import Content from "./Components/TextCommponents/Content";

const test = () => {
  return (
    <div>
      <Hero />
      <Drawer>
        <Timer />
        <Content />
        <div className="flex space-x-16">
          <a
            href="/navigation"
            className="btn btn-wide ms-8  btn-base-300 text-blue-700"
          >
            Library of Knowlage
          </a>
          <Randomizer />
        </div>
      </Drawer>
      <Footer />
    </div>
  );
};

export default test;
