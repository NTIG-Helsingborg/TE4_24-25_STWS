import React from "react";
import Coob from "../Components/Coob";
import Characters from "../Assets/Characters.png";
import Films from "../Assets/Films.png";
import Planets from "../Assets/Planets.png";
import StarShips from "../Assets/StarShips.png";
import Species from "../Assets/Species.png";
import Vehicles from "../Assets/Vehicles.png";

const page = () => {
  return (
    <>
      <div className="flex md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8 flex-col">
        <Coob img={Characters} header="Characters" cart="/navi/people"></Coob>
        <Coob img={Films} header="Films" cart="/navi/films"></Coob>
        <Coob img={Planets} header="Planets" cart="/navi/planets"></Coob>
      </div>
      <div className="flex md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8 flex-col">
        <Coob img={Species} header="Species" cart="/navi/species"></Coob>
        <Coob img={StarShips} header="Starships" cart="/navi/starships"></Coob>
        <Coob img={Vehicles} header="Vehicles" cart="/navi/vehicles"></Coob>
      </div>
    </>
  );
};

export default page;
