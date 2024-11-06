"use client";
import React from "react";
import ClientFetch from "./FunctioningShit/ClientFetch";

interface CardProps {
  itemId: string;
  src: string; //image
}
const ClientConverter = ({ itemId, src }: CardProps) => {
  //const isFavorited = favItems.includes(itemId);
  type Catagory =
    | "people"
    | "planets"
    | "films"
    | "species"
    | "vehicles"
    | "starships";
  const id = itemId;

  // Split the string by the colon
  const [Catagory, tag] = id.split(":") as [Catagory, string];

  // Convert planetId to a number
  const idTag = parseInt(tag);

  return (
    <>
      {/*<ClientCard src={src} catagory={Catagory} id={idTag} />*/}
      <ClientFetch params={{ id: idTag, catagory: Catagory }} src={src} />
    </>
  );
};

export default ClientConverter;
