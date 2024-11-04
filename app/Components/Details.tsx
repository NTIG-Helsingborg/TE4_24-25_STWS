"use client";
import { useEffect } from "react";
import sampleData from "../../the_file_tm.json";
import { useSearchParams } from "next/navigation";
import { updateCard, getMessage } from "@/app/Components/ServerAction";

interface DataItem {
  id: number;
  name: string;
}

const Details = () => {
  const router = useSearchParams();
  const temp_query = router.get("query");

  if (temp_query === null) return <div>ERR</div>;

  const [id, index] = temp_query.split(":") as [
    "people" | "planets" | "films" | "species" | "vehicles" | "starships",
    string
  ];

  const all = sampleData[id]?.find((val) => val[1] === parseInt(index));

  if (!all) {
    return <div>Character not found</div>;
  }

  const itemID = `${id}:${all[1]}`;

  useEffect(() => {
    async function sendData() {
      try {
        console.log("Sending itemID:", itemID);
        await updateCard(itemID); // Wait for updateCard to complete
        const message = await getMessage(); // Retrieve the updated message
        console.log("Updated message from getMessage:", message); // Confirm it was updated
      } catch (error) {
        console.error("Error in sending or retrieving data:", error);
      }
    }
    sendData();
  }, [itemID]);

  return (
    <div>
      <h1>{all[0]}</h1>
      <p>Category ID: {itemID}</p>
    </div>
  );
};

export default Details;
