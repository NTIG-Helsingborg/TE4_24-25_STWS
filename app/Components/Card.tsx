import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface CardProps {
  itemID: string;
  favItems: string[]; // Array of favorite item IDs
  updateFavItems: (itemID: string) => void; // Function to update favorite items
  title: string; // Title for the card
  description: string; // Description for the card
  src: string; //image
}

const Card = ({
  itemID,
  favItems,
  updateFavItems,
  title,
  description,
  src,
}: CardProps) => {
  const isFavorited = favItems.includes(itemID);

  return (
    <div className="card bg-base-100 image-full  shadow-xl">
      <figure>
        <img src={src} alt="Item" />
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
