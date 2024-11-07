"use client";
import React from "react";

import sampleData from "@/temp_write.json"; // Import the JSON data
import ClientFetch from "./FunctioningShit/ClientFetch";

interface CardProps {
  itemID: string;
}

const Converter = ({ itemID }: CardProps) => {
  interface DataItem {
    id: number;
    name: string;
    src: string;
    custom: [string, number];
  }

  // Example itemId to compare, formatted as "planets:1"

  // Assuming sampleData is already defined

  let global_timer = 0;

  // Flattening the data to get all items in one array
  const data: DataItem[] = Object.entries(
    sampleData as unknown as { [id: number]: [string, number, string][] }
  )
    .map((val) => {
      return val[1].map((ival) => {
        let imagesrc = ival[2];
        if (typeof imagesrc === "string") {
          let image_pos = imagesrc.indexOf(".png");
          if (image_pos > 0) {
            imagesrc = imagesrc.slice(0, image_pos + 4);
          } else {
            image_pos = imagesrc.indexOf(".jpg");
            imagesrc = imagesrc.slice(0, image_pos + 4);
          }
        }
        return {
          id: global_timer++, // Assigning a numeric ID based on the second element in custom (or another logic you prefer)
          name: ival[0], // First element in the tuple as name
          src: imagesrc, // Third element in the tuple as src
          custom: [val[0], ival[1]] as [string, number], // Custom tuple
        };
      });
    })
    .flat(2);

  // Function to find a specific DataItem by comparing the entire custom tuple formatted as "name:number" with itemId
  function findItemByCustom(itemID: string): DataItem | undefined {
    return data.find((item) => {
      const customStr = `${item.custom[0]}:${item.custom[1]}`;
      return customStr === itemID; // Compare formatted string with itemId
    });
  }

  // Find the specific item
  const specificItem = findItemByCustom(itemID);

  type Category =
    | "people"
    | "planets"
    | "films"
    | "species"
    | "vehicles"
    | "starships";

  const ido = itemID;
  console.log(ido);

  // Split the string by the colon
  console.log(ido);
  const [category, tag] = ido.split(":") as [Category, string];
  console.log(ido);

  // Convert the tag (which is a string) to a number
  const idTag = parseInt(tag);

  console.log(
    specificItem?.src ||
      "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
  );

  return (
    <>
      {/* <ClientCard src={src} category={category} id={idTag} /> */}
      <ClientFetch
        params={{ id: idTag, catagory: category }}
        source={
          specificItem?.src ||
          "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
        } // Fallback to "defaultSrc" if specificItem is undefined
      />
    </>
  );
};

export default Converter;
