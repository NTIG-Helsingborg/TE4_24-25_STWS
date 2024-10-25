import ApiCall from "../Components/ApiCall";

import CardList from "../Components/CardList";
import ClientCard from "../Components/ClientCard";
import Converter from "../Components/Converter";
import Drawer from "../Components/Drawer";
import FavoriteButton from "../Components/FavoriteButton";
import Footer from "../Components/Footer";
import ParentComponent from "../Components/ParentComponent";

import PlaceholderContent from "../Components/PlaceholderContent";

export default function Home() {
  return (
    <main>
      <Drawer>
        <ParentComponent />
      </Drawer>
      <Footer />
    </main>
  );
}
