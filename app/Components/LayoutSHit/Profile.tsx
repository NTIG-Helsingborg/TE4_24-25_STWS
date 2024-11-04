// pages/favorites.tsx
"use client";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [favorites, setFavorites] = useState<string[]>([]); // State to hold favorite items

  // Use effect to load favorites from local storage when the component mounts
  useEffect(() => {
    const loadFavorites = () => {
      if (typeof window !== "undefined") {
        // Check if running in the browser
        try {
          const storedFavorites = localStorage.getItem("favorites"); // Get favorites from local storage
          const favoritesArray = storedFavorites
            ? JSON.parse(storedFavorites)
            : []; // Parse to array or default to empty
          setFavorites(favoritesArray); // Update state with the favorites
        } catch (error) {
          console.error("Failed to load favorites:", error); // Handle any errors
        }
      }
    };

    loadFavorites(); // Call the function to load favorites
  }, []); // Run once when the component mounts

  return (
    <div>
      <h1>Your Favorite Items</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((itemId) => (
            <li key={itemId}>Item ID: {itemId}</li> // Display each favorite item
          ))}
        </ul>
      ) : (
        <p>No favorite items found.</p> // Message if no favorites
      )}
    </div>
  );
};

export default Profile;
