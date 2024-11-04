import React from "react";
import FavoriteButton from "../FavoriteButton";

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
    <>
      <div className="card card-side bg-base-100 shadow-xl">
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
    </>
  );
};

export default Card;
