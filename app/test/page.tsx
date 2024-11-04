import Drawer from "../Components/LayoutSHit/Drawer";

import Footer from "../Components/LayoutSHit/Footer";

import SearchBar from "../Components/FunctioningShit/SearchBar";

export default function Home() {
  return (
    <main>
      <Drawer>
        <SearchBar />
      </Drawer>
      <Footer />
    </main>
  );
}
