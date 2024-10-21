import React from "react";
import Drawer from "./Drawer";
import CardList from "./CardList";

const PlaceholderContent = () => {
  return (
    <>
      <Drawer>
        <div>
          <CardList />
        </div>
      </Drawer>
    </>
  );
};

export default PlaceholderContent;
