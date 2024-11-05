"use client";
import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci"; // Import empty star icon
import { FaStar } from "react-icons/fa"; // Import filled star icon

interface FavoriteButtonProps {
  id: string; // Unique identifier for the item
}

const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const loadFavorites = () => {
      if (typeof window !== "undefined") {
        try {
          const storedFavorites = localStorage.getItem("favorites");
          const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
          return favorites.includes(id);
        } catch (error) {
          console.error("Failed to load favorites:", error);
          return false;
        }
      }
      return false;
    };

    const favoriteStatus = loadFavorites();
    setIsFavorite(favoriteStatus); // Only set state here
  }, [id]);

  const saveFavorites = (newFavorites: string[]) => {
    try {
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } catch (error) {
      console.error("Failed to save favorites:", error);
    }
  };

  // Function to toggle the favorite state
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavorites;

    if (isFavorite) {
      // If it's currently a favorite, remove it
      updatedFavorites = favorites.filter((fav: string) => fav !== id);
    } else {
      // If it's not a favorite, add it
      updatedFavorites = [...favorites, id];
    }

    saveFavorites(updatedFavorites);
    setIsFavorite(!isFavorite); // Toggle state
  };

  return (
    <button
      className="btn favorite-button" // Add class to identify it
      data-id={id} // Set data attribute for identification
      onClick={toggleFavorite}
    >
      {isFavorite ? <FaStar /> : <CiStar />}{" "}
    </button>
  );
};

export default FavoriteButton;
