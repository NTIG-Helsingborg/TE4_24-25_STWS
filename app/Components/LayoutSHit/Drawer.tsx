import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface DrawerProps {
  children: React.ReactNode;
}

const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className="fixed top-0 left-0 m-4 btn btn-outline rounded-none border-none drawer-button lg:hidden"
        >
          <GiHamburgerMenu />
          Menu
        </label>

        {/* Dynamic Content passed as children */}
        <div className="flex-1 p-6">{children}</div>
      </div>

      {/* Sidebar (Drawer) */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="bg-gray-300 min-h-full w-44 p-4 text-gray-900">
          <h1 className="protest-strike-regular block mb-2">Placeholder</h1>
          <hr className="bg-gray-900" />
          <ul className="fenix-regular">
            {/* Sidebar content */}
            <li>
              <a href="/" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/test" className="">
                Test
              </a>
            </li>
            <li>
              <a href="/profile" className="">
                Profile
              </a>
            </li>
            <hr className=""></hr>
            <li>
              <a href="/planets" className="">
                Planets
              </a>
            </li>
            <li>
              <a href="/people" className="">
                People
              </a>
            </li>
            <li>
              <a href="/vehicles" className="">
                Vehicles
              </a>
            </li>
            <li>
              <a href="/starships" className="">
                Starships
              </a>
            </li>
            <li>
              <a href="/films" className="">
                Films
              </a>
            </li>
            <li>
              <a href="/species" className="">
                Species
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
