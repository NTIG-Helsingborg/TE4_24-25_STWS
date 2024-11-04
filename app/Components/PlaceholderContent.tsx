import React from "react";
import Drawer from "./Drawer";
import CardList from "./CardComponents/CardList";
import Randomizer from "./Randomizer";

const PlaceholderContent = () => {
  return (
    <>
      <Drawer>
        <Randomizer />
        {/* Using separate IDs without an array */}
        <CardList />
      </Drawer>
    </>
  );
};

export default PlaceholderContent;
