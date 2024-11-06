import React from "react";
import FavoriteButton from "../FunctioningShit/FavoriteButton";

interface CardProps {
  name?: string;
  itemID: string;
  favItems?: string[]; // Array of favorite item IDs
  updateFavItems?: (itemID: string) => void; // Function to update favorite items
  src: string; //image
  climate?: string;
}

const Card = ({ itemID, src, name, climate }: CardProps) => {
  //const isFavorited = favItems.includes(itemID);

  return (
    <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={src} alt="Item" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{climate}</p>
          <div className="card-actions justify-end">
            <FavoriteButton id={itemID} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
