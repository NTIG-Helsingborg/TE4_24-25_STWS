/*import { CgProfile } from "react-icons/cg";
import Drawer from "../Components/Drawer";
import NameDisplay from "../Components/NameDisplay";
import Usr_btns from "../usr_buttons";

const Profile = () => {
  return (
    <>
      <Drawer>
        <header className="flex flex-row bg-gray-300 rounded">
          <div className="flex px-1 basis-2/3 items-center justify-center">
            <NameDisplay />
          </div>

          <div className="flex px-1 basis-1/3 justify-end">
            <CgProfile className="xl:size-64 lg:size-32 md:size-16 size-7" />
          </div>
        </header>
      </Drawer>*/
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

//export default Profile;
export default page;
