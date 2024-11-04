import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <>
      <div className="container mx-auto p-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card
            itemID="planets:1"
            src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
          />
          <Card
            itemID="planets:2"
            src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
          />
          <Card
            itemID="planets:3"
            src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
          />
          <Card
            itemID="planets:4"
            src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
          />
        </div>
      </div>
    </>
  );
};

export default CardList;
