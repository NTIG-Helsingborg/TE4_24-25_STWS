import React from "react";
import Drawer from "./Drawer";
import SearchBar from "./SearchBar";
import Randomizer from "./Randomizer";
import CardList from "./CardList";

const PlaceholderContent = () => {
  return (
    <>
      <Drawer>
        <SearchBar />
        <Randomizer />
        <CardList />
      </Drawer>
    </>
  );
};

export default PlaceholderContent;
