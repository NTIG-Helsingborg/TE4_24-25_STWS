import ApiCall from "../Components/ApiCall";

import CardList from "../Components/CardList";
import ClientCard from "../Components/ClientCard";
import Converter from "../Components/Converter";
import Drawer from "../Components/Drawer";
import FavoriteButton from "../Components/FavoriteButton";
import Footer from "../Components/Footer";
import ParentComponent from "../Components/ParentComponent";

import PlaceholderContent from "../Components/PlaceholderContent";
import SearchBar from "../Components/SearchBar";

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
