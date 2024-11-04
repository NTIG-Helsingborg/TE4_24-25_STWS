import React from "react";
import Drawer from "./Drawer";
import CardList from "./CardComponents/CardList";

const PlaceholderContent = () => {
  return (
    <>
      <Drawer>
        {/* Using separate IDs without an array */}
        <CardList />
      </Drawer>
    </>
  );
};

export default PlaceholderContent;
