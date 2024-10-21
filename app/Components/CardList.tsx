// components/CardList.tsx
"use client";
import React, { useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [favItems, setFavItems] = useState<string[]>([]);

  // Function to update favorite items
  const updateFavItems = (itemID: string) => {
    setFavItems((prevFavItems) => {
      const updatedFavItems = prevFavItems.includes(itemID)
        ? prevFavItems.filter((id) => id !== itemID) // Remove if already in favorites
        : [...prevFavItems, itemID]; // Add to favorites if not already present

      console.log("Updated Favorites: ", updatedFavItems); // Log the updated favorites
      return updatedFavItems; // Return the updated state
    });
  };

  // Example items (you can replace this with your actual data)
  const items = ["1", "2", "3", "4", "5"]; // Add your item IDs here

  return (
    <div className="flex flex-wrap gap-4">
      {items.map((itemID) => (
        <Card
          key={itemID}
          itemID={itemID}
          favItems={favItems}
          updateFavItems={updateFavItems}
        />
      ))}
    </div>
  );
};

export default CardList;
