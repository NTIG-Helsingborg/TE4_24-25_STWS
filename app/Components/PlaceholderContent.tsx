import React from "react";
import Drawer from "./Drawer";
import Card from "./Card";
import CardList from "./CardList";

const PlaceholderContent = () => {
  return (
    <>
      <Drawer>
        <div>
          <h1>Welcome to the Shared Favorites Example</h1>
          <CardList />
        </div>
      </Drawer>
    </>
  );
};

export default PlaceholderContent;
