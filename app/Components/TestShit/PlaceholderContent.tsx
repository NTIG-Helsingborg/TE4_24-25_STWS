import React from "react";
import Drawer from "../LayoutSHit/Drawer";
import CardList from "../CardComponents/CardList";
import Randomizer from "../FunctioningShit/Randomizer";

const PlaceholderContent = ({ children }: any) => {
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
