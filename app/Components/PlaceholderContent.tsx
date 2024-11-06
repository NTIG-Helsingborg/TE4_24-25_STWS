import React from "react";
import Drawer from "./Drawer";
import SearchBar from "./SearchBar";
import Randomizer from "./Randomizer";
import CardList from "./CardList";
import Button from "./Button";

const PlaceholderContent = ({ children }: any) => {
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
