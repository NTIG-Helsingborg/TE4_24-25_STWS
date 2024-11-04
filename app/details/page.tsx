import React from "react";
import Details from "../Components/FunctioningShit/Details";
import Drawer from "../Components/LayoutSHit/Drawer";
import Footer from "../Components/LayoutSHit/Footer";

const page = () => {
  return (
    <>
      <Drawer>
        <Details src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/" />
      </Drawer>
      <Footer />
    </>
  );
};

export default page;
