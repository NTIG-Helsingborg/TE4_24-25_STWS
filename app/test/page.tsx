import Drawer from "../Components/LayoutSHit/Drawer";
import Footer from "../Components/LayoutSHit/Footer";
import sampleData from "@/the_file_tm.json";
import Pagination from "../Components/Pagination";
import SearchBar from "../Components/FunctioningShit/SearchBar";

export default function Home() {
  return (
    <main>
      <Drawer>
        <SearchBar />
        {sampleData.people
          .map((ival) => {
            return ["people", ival[1]].join(":");
          })
          .flat(1)
          .map((val, index) => {
            // Added 'index' as a parameter
            return <p key={index}>{val}</p>; // Assigning 'key' prop
          })}
        <Pagination />
      </Drawer>
      <Footer />
    </main>
  );
}
