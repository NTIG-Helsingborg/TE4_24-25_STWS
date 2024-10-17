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
          <a className="protest-strike-regular block mb-2">Placeholder</a>
          <hr className="bg-gray-900" />
          <ul className="fenix-regular">
            {/* Sidebar content */}
            <li>
              <a className="">Home</a>
            </li>
            <li>
              <a className="">APOD</a>
            </li>
            <li>
              <a className="">Twacking</a>
            </li>
            <li>
              <a className="">Staw schart</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
