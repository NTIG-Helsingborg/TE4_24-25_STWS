import Drawer from "../Components/LayoutSHit/Drawer";

import Footer from "../Components/LayoutSHit/Footer";

import sampleData from "@/the_file_tm.json";

export default function Home() {
  return (
    <main>
      <Drawer>
        {sampleData.people
          .map((ival) => {
            return ["people", ival[1]].join(":");
          })
          .flat(1)
          .map((val) => {
            return <p>{val}</p>;
          })}
      </Drawer>
      <Footer />
    </main>
  );
}
