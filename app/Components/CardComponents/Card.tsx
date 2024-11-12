import React from "react";
import FavoriteButton from "../FunctioningShit/FavoriteButton";

interface CardProps {
  name?: string;
  itemID: string;
  src: string; //image
  climate?: string;
}

const Carde = ({ itemID, src, name}: CardProps) => {
  //const isFavorited = favItems.includes(itemID);

  return (
    <>
      <a href={`/details?query=${itemID}`}>
        <div className="mt-4 h-96 card shadow-xl w-72 bg-slate-700">
          <figure>
            <img src={src} className="rounded-md mt-4" alt="Item" />
          </figure>
          <div className="card-body">
            <div className="card-actions flex items-center justify-between">
              <div>{name}</div>
              <div>
                <FavoriteButton id={itemID} />
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Carde;
