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
      <a href={`/details?query=${itemID}`}>
        <div className="card lg:card-side shadow-xl bg-zinc-600">
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
