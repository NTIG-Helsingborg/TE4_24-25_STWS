import React from "react";
import ApiCall from "./ApiCall";

interface CardProps {
  itemID: string;
  src: string; //image
}
const Converter = ({ itemID, src }: CardProps) => {
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
      {/*<ClientCard src={src} catagory={Catagory} id={idTag} />*/}
      <ApiCall
        params={{ id: idTag, catagory: Catagory }}
        src={
          "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
        }
      />
    </>
  );
};

export default Converter;
