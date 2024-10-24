import React from "react";
import ApiCall from "./ApiCall";
import FavoriteButton from "./FavoriteButton";

interface CardProps {
  itemID: string;
  favItems?: string[]; // Array of favorite item IDs
  updateFavItems?: (itemID: string) => void; // Function to update favorite items
  src: string; //image
}

const Card = ({ itemID, src }: CardProps) => {
  //const isFavorited = favItems.includes(itemID);
  type catagory =
    | "people"
    | "planets"
    | "films"
    | "species"
    | "vehicles"
    | "starships";
  const id = itemID;

  // Split the string by the colon
  const [Catagory, tag] = id.split(":") as [catagory, string];

  // Convert planetId to a number
  const idTag = parseInt(tag);

  console.log(Catagory); // "planet"
  console.log(idTag); // 1

  return (
    <>
      <ApiCall params={{ catagory: Catagory, id: idTag }} src={src}>
        <FavoriteButton itemID={itemID} />
      </ApiCall>
    </>
  );
};

export default Card;
