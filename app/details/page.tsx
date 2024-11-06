"use client";
import sampleData from "../../the_file_tm.json"; // Import your data
import { useSearchParams } from "next/navigation";
// Define the type for your data
interface DataItem {
  id: number;
  name: string;
}
const DetailsPage = () => {
  const router = useSearchParams();
  const temp_query = router.get("query");
  if (temp_query === null) return <div>ERR</div>;
  const [id, index] = temp_query.split(":") as [
    "people" | "planets" | "films" | "species" | "vehicles" | "starships",
    string
  ]; // Get the dynamic id from the URL
  // Find the corresponding data for the given ID
  const all = sampleData[id].find((val) => {
    return val[1] === parseInt(index);
  });

  if (!all) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <h1>{all[0]}</h1>
      <p>Catagory ID: {all[1]}</p>
      {/* You can render more information here based on your data */}
    </div>
  );
};

export default DetailsPage;
