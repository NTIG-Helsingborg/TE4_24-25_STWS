// hooks/useFavoriteItems.ts
"use client";
import { useState, useEffect } from "react";

export const useFavoriteItems = () => {
  const [favItems, setFavItems] = useState<string[]>([]);

  useEffect(() => {
    const savedFav = localStorage.getItem("savedFav");
    if (savedFav) {
      try {
        const loadedItems = JSON.parse(savedFav);
        setFavItems(Array.isArray(loadedItems) ? loadedItems : []);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    }
  }, []);

  const updateFavItems = (itemID: string) => {
    setFavItems((prevFavItems) => {
      const updatedFavItems = prevFavItems.includes(itemID)
        ? prevFavItems.filter((id) => id !== itemID)
        : [...prevFavItems, itemID];

      localStorage.setItem("savedFav", JSON.stringify(updatedFavItems));
      return updatedFavItems;
    });
  };

  return { favItems, updateFavItems };
};
