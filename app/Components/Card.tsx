// components/Card.tsx
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface CardProps {
  itemID: string; // Unique ID for each item
  favItems: string[]; // Array of favorite item IDs
  updateFavItems: (itemID: string) => void; // Function to update favorite items
  title: string; // Title for each card
  description: string; // Description for each card
}

const Card = ({
  itemID,
  favItems,
  updateFavItems,
  title,
  description,
}: CardProps) => {
  // Determine if the item is favorited
  const isFavorited = favItems.includes(itemID);

  return (
    <div className="card bg-base-100 image-full w-64 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Item"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => updateFavItems(itemID)}
            className="btn btn-primary"
          >
            {isFavorited ? <FaStar /> : <CiStar />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
