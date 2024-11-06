import React from "react";
import Drawer from "../Components/LayoutSHit/Drawer";
import Footer from "../Components/LayoutSHit/Footer";
import SearchParams from "../Components/SearchParams";

const page = () => {
  return (
    <>
      <Drawer>
        <SearchParams />
      </Drawer>
      <Footer />
    </>
  );
};

export default page;
