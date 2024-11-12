import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
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
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/navigation" className="">
                Navigation
              </Link>
            </li>
            <li>
              <Link href="/profile" className="">
                Profile
              </Link>
            </li>
            -------------------
            <li>
              <Link href="/navi/planets" className="">
                Planets
              </Link>
            </li>
            <li>
              <div className="flex px-1 basis-1/3 items-center justify-center absolute inset-x-0 bottom-0">
                <div className="btn lg:btn-wide ">
                  <Usr_btns />
                </div>
              </div>
              <Link href="/navi/people" className="">
                People
              </Link>
            </li>
            <li>
              <Link href="/navi/vehicles" className="">
                Vehicles
              </Link>
            </li>
            <li>
              <Link href="/navi/starships" className="">
                Starships
              </Link>
            </li>
            <li>
              <Link href="/navi/films" className="">
                Films
              </Link>
            </li>
            <li>
              <Link href="/navi/species" className="">
                Species
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
