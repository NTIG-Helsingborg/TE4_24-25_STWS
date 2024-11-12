// pages/profile.tsx
"use client";
import React, { useEffect, useState} from "react";

import ClientConverter from "../ClientConverter";

const Profile = () => {
  const [favorites, setFavorites] = useState<string[]>([]); // State to hold favorite items

  // Load favorites from local storage when the component mounts
  useEffect(() => {
    const loadFavorites = () => {
      if (typeof window !== "undefined") {
        try {
          const storedFavorites = localStorage.getItem("favorites");
          const favoritesArray = storedFavorites
            ? JSON.parse(storedFavorites)
            : [];
          setFavorites(favoritesArray); // Update state with the favorites
        } catch (error) {
          console.error("Failed to load favorites:", error);
        }
      }
    };

    loadFavorites(); // Call the function to load favorites
  }, []); // Run once when the component mounts

  // Function to update the favorites state when an item is toggled
  const updateFavorites = (itemId: string, isFavorite: boolean) => {
    setFavorites((prevFavorites) => {
      if (isFavorite) {
        // If the item is being favorited, add it to the list
        return [...prevFavorites, itemId];
      } else {
        // If the item is being unfavorited, remove it from the list
        return prevFavorites.filter((fav) => fav !== itemId);
      }
    });
  };

  // Global click listener
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if the clicked element is a FavoriteButton
      if (target.closest(".favorite-button")) {
        const itemId = target.getAttribute("data-id"); // Get the item ID from data attribute

        if (itemId) {
          const isFavorite = favorites.includes(itemId);
          updateFavorites(itemId, !isFavorite); // Update the favorites based on current state
        }
      }
    };

    // Add event listener for clicks
    window.addEventListener("click", handleGlobalClick);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("click", handleGlobalClick);
    };
  }, [favorites]); // Dependency on favorites to ensure the latest state

  return (
    <>
      {favorites.length > 0 ? (
        <div>
          {favorites.map((itemId) => (
            <div key={itemId} data-id={itemId} className="mb-4">
              {" "}
              {/* Ensure unique key */}
              <ClientConverter itemID={itemId} />
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite items found.</p> // Message if no favorites
      )}
    </>
  );
};

export default Profile;
