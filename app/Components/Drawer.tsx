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
        <div className="relative bg-gray-300 min-h-full w-44 p-4 text-gray-900">
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
              <a className="">Twacking</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <div className="flex px-1 basis-1/3 items-center justify-center absolute inset-x-0 bottom-0 mb-5">
                <div className="btn">
                  <Usr_btns />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
