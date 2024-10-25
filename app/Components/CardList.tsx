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
            itemID="planets:5"
            src="https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg"
          />
          <Card
            itemID="planets:2"
            src="https://static.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg"
          />
          <Card
            itemID="planets:8"
            src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
          />
          <Card
            itemID="people:1"
            src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
          />
          <Card
            itemID="people:3"
            src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
          />
          <Card
            itemID="people:2"
            src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
          />
        </div>
      </div>
    </>
  );
};

export default CardList;
