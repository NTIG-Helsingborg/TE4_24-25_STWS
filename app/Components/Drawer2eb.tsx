import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Drawer2eb = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-outline rounded-none border-none drawer-button lg:hidden"
        >
          <GiHamburgerMenu />
          Menu
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-gray-300  min-h-full w-44 p-4 text-gray-900">
          <a className="protest-strike-regular block mb-2">Placeholder</a>
          <hr className="bg-gray 900" />
          <ul className=" fenix-regular">
            {/* Sidebar content here */}
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

export default Drawer2eb;
