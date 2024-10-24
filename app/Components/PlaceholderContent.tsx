import React from "react";
import Drawer from "./Drawer";
import SearchBar from "./SearchBar";
import Randomizer from "./Randomizer";
import CardList from "./CardList";
import Timer from "./Timer";
import ParentComponent from "./ParentComponent";

const PlaceholderContent = () => {
  return (
    <>
      <Drawer>
        <ParentComponent />
      </Drawer>
    </>
  );
};

export default PlaceholderContent;
