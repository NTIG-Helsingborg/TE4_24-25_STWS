"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = () => {
  const [favItems, setFavItems] = useState<string[]>([]);

  useEffect(() => {
    // Get the value from local storage if it exists, otherwise set to an empty array
    const savedFav = localStorage.getItem("savedFav");
    if (savedFav) {
      try {
        const loadedItems = JSON.parse(savedFav); // Parse only if valid JSON
        setFavItems(Array.isArray(loadedItems) ? loadedItems : []);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    }
  }, []);

  // Function to update favorite items
  const updateFavItems = (itemID: string) => {
    setFavItems((prevFavItems) => {
      const updatedFavItems = prevFavItems.includes(itemID)
        ? prevFavItems.filter((id) => id !== itemID) // Remove if already in favorites
        : [...prevFavItems, itemID]; // Add to favorites if not already present
      localStorage.setItem("savedFav", JSON.stringify(updatedFavItems));
      console.log(updatedFavItems); // Log the updated favorites
      return updatedFavItems; // Return the updated state
    });
  };

  // Example items with titles and descriptions
  const items = [
    { id: "1", title: "Card 1", description: "Description for Card 1" },
    { id: "2", title: "Card 2", description: "Description for Card 2" },
    { id: "3", title: "Card 3", description: "Description for Card 3" },
    { id: "4", title: "Card 4", description: "Description for Card 4" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <Card
          key={item.id}
          itemID={item.id}
          favItems={favItems}
          updateFavItems={updateFavItems}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardList;
