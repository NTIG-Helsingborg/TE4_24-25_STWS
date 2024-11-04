import React from "react";
import Circle from "./ReusableComponents/Circle";

const Footer = () => {
  return (
    <>
      <div className="p-9 bg-gray-400 text-white content-center fenix-regular">
        <div className="flex space-x-4 justify-center">
          <Circle text=""></Circle>
          <Circle text=""></Circle>
          <Circle text=""></Circle>
          <Circle text=""></Circle>
          <Circle text=""></Circle>
        </div>
        <div className="flex space-x-7 justify-center mt-5">
          <span className="">Home</span>
          <span className="">Text</span>
          <span className="">About</span>
          <span className="">Contact us</span>
          <span className="">Our team</span>
        </div>
      </div>
      <div className="w-screen text-center fenix-regular p-2 bg-gray-500">
        <span className="">Copyright ©2024; Designed by Nexusiusen</span>
      </div>
    </>
  );
};

export default Footer;
