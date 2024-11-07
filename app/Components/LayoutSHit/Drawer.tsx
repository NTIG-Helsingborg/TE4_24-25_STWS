import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Usr_btns from "../usr_buttons";
interface DrawerProps {
  children: React.ReactNode;
}

const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col">
        <div className="lg:hidden h-16">
          <label
            htmlFor="my-drawer-2"
            className="fixed top-0 left-0 m-4 btn btn-outline rounded border-none drawer-button z-10 bg-slate-600"
          >
            <GiHamburgerMenu />
            Menu
          </label>
        </div>

        {/* Dynamic Content passed as children */}
        <div className="flex-1 p-6">{children}</div>
      </div>

      {/* Sidebar (Drawer) */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="relative bg-gray-300 min-h-full w-44 p-4 text-gray-900">
          <h1 className="protest-strike-regular block ">STWS KNOWLAGE</h1>
          -------------------
          <ul className="fenix-regular">
            {/* Sidebar content */}
            <li>
              <a href="/" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/navigation" className="">
                Navigation
              </a>
            </li>
            <li>
              <a href="/profile" className="">
                Profile
              </a>
            </li>
            -------------------
            <li>
              <a href="/navi/planets" className="">
                Planets
              </a>
            </li>
            <li>
              <div className="flex px-1 basis-1/3 items-center justify-center absolute inset-x-0 bottom-0">
                <div className="btn lg:btn-wide ">
                  <Usr_btns />
                </div>
              </div>
              <a href="/navi/people" className="">
                People
              </a>
            </li>
            <li>
              <a href="/navi/vehicles" className="">
                Vehicles
              </a>
            </li>
            <li>
              <a href="/navi/starships" className="">
                Starships
              </a>
            </li>
            <li>
              <a href="/navi/films" className="">
                Films
              </a>
            </li>
            <li>
              <a href="/navi/species" className="">
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
