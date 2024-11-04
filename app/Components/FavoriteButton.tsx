// components/FavoriteButton.tsx
"use client";
import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci"; // Import empty star icon
import { FaStar } from "react-icons/fa"; // Import filled star icon

interface FavoriteButtonProps {
  id: string; // Unique identifier for the item
}

// Define the FavoriteButton functional component without React.FC
const FavoriteButton = ({ id }: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false); // State to track if the item is a favorite

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const loadFavorites = () => {
      if (typeof window !== "undefined") {
        try {
          const storedFavorites = localStorage.getItem("favorites"); // Get the favorites from local storage
          const favorites = storedFavorites ? JSON.parse(storedFavorites) : []; // Parse the favorites or return an empty array
          return favorites.includes(id); // Check if the current id is a favorite
        } catch (error) {
          console.error("Failed to load favorites:", error); // Log any error that occurs
          return false; // Default to false on error
        }
      }
      return false; // Return false if window is undefined (for SSR)
    };

    setIsFavorite(loadFavorites()); // Update the state with the favorite status when component mounts
  }, [id]); // Run effect when the id changes

  // Save favorites to local storage
  const saveFavorites = (newFavorites: string[]) => {
    try {
      localStorage.setItem("favorites", JSON.stringify(newFavorites)); // Store updated favorites in local storage
    } catch (error) {
      console.error("Failed to save favorites:", error); // Log any error that occurs
    }
  };

  // Toggle favorite status
  const toggleFavorite = () => {
    setIsFavorite((prev) => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]"); // Read current favorites from local storage

      if (prev) {
        // If the item is currently a favorite
        const updatedFavorites = favorites.filter((fav: string) => fav !== id); // Remove the current id from favorites
        saveFavorites(updatedFavorites); // Save the updated favorites list
        return false; // Update state to not favorite
      } else {
        // If the item is not a favorite
        if (!favorites.includes(id)) {
          favorites.push(id); // Add the current id to favorites
          saveFavorites(favorites); // Save the updated list
        }
        return true; // Update state to favorite
      }
    });
  };

  return (
    <button className="btn" onClick={toggleFavorite}>
      {isFavorite ? <FaStar /> : <CiStar />}{" "}
      {/* Show filled star if favorite, else show empty star */}
    </button>
  );
};

export default FavoriteButton; // Export the component for use in other files
