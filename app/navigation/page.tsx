import React from "react";
import Coob from "../Components/Coob";
import Characters from "../Assets/Characters.png";
import Films from "../Assets/Films.png";
import Planets from "../Assets/Planets.png";
import StarShips from "../Assets/StarShips.png";
import Species from "../Assets/Species.png";
import Vehicles from "../Assets/Vehicles.png";
import SearchBar from "../Components/FunctioningShit/SearchBar";
import Drawer from "../Components/LayoutSHit/Drawer";
import Footer from "../Components/LayoutSHit/Footer";

const page = () => {
  return (
    <>  
    <Drawer>

    <SearchBar/>
      <div className="flex md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8 flex-col">
        <Coob
          img={Characters}
          header="Characters"
          text=""
          cart="/navi/characters"
        ></Coob>
        <Coob img={Films} header="Films" text="" cart="/navi/films"></Coob>
        <Coob
          img={Planets}
          header="Planets"
          text=""
          cart="/navi/planets"
        ></Coob>
      </div>
      <div className="flex md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8 flex-col">
        <Coob
          img={Species}
          header="Species"
          text=""
          cart="/navi/species"
        ></Coob>
        <Coob
          img={StarShips}
          header="Starships"
          text=""
          cart="/navi/starships"
        ></Coob>
        <Coob
          img={Vehicles}
          header="Vehicles"
          text=""
          cart="/navi/vehicles"
        ></Coob>
      </div>
      </Drawer>
      <Footer/>
    </>
  );
};

export default page;
