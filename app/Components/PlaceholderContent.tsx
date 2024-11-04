import React from "react";
import Drawer from "./Drawer";
import SearchBar from "./SearchBar";
import Randomizer from "./Randomizer";
import CardList from "./CardList";
import Timer from "./Timer";
import ParentComponent from "./ParentComponent";
import ApiCall from "./ApiCall";

const PlaceholderContent = () => {
  return (
    <>
      <Drawer>
        <Randomizer />
        <ApiCall
          params={{ id: 1, catagory: "planets" }}
          src={
            "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
          }
        />
      </Drawer>
    </>
  );
};

export default PlaceholderContent;
