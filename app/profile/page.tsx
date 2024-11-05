import React from "react";
import Profile from "../Components/FunctioningShit/Profile";
import Drawer from "../Components/LayoutSHit/Drawer";
import Footer from "../Components/LayoutSHit/Footer";

const page = () => {
  return (
    <>
      <Drawer>
        <Profile />
      </Drawer>
      <Footer />
    </>
  );
};

export default page;
