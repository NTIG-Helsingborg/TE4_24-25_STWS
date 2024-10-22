"use client";
import React from "react";
import Card from "./Card";
import { useFavoriteItems } from "@/app/Hooks/useFavoriteItems";
import "@/api_links";

const CardList = () => {
  api_links.starwars("planets", { type: "all" });

  const { favItems, updateFavItems } = useFavoriteItems();
  return (
    <>
      <div className="container mx-auto p-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card
            itemID="planet:1"
            title="Tatooine"
            description={api_links.starwars("planets", { type: "all" })}
            favItems={favItems}
            updateFavItems={updateFavItems}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
          <Card
            itemID="planet:2"
            title="Courosant"
            description="Description for Card 2"
            favItems={favItems}
            updateFavItems={updateFavItems}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
          <Card
            itemID="planet:3"
            title="Naboo"
            description="Description for Card 3"
            favItems={favItems}
            updateFavItems={updateFavItems}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
          <Card
            itemID="planet:4"
            title="Geonosis"
            description="Description for Card 4"
            favItems={favItems}
            updateFavItems={updateFavItems}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
          <Card
            itemID="planet:5"
            title="Mustafar"
            description="Description for Card 5"
            favItems={favItems}
            updateFavItems={updateFavItems}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
        </div>
      </div>
    </>
  );
};

export default CardList;
