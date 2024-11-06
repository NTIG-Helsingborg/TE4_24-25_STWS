import React from "react";
import FavoriteButton from "../FunctioningShit/FavoriteButton";

interface CardProps {
  name?: string;
  itemID: string;
  src: string; //image
  climate?: string;
}

const Card = ({ itemID, src, name, climate }: CardProps) => {
  //const isFavorited = favItems.includes(itemID);

  return (
    <>
      <a href="http://localhost:3000/details?query=planets:1">
        <div className="card lg:card-side shadow-xl bg-white">
          <figure>
            <img src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>

            <div className="card-actions justify-end">
              <FavoriteButton id={itemID} />
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
