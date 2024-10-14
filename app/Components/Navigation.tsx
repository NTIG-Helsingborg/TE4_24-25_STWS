import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="w-1/12 bg-gray-400 text-gray-950 px-0">
        <div className=" bg-gray-50 p-1">
          <div className="mx-auto w-12 h-12 bg-green-500"></div>
          <span className="protest-strike-regular m-2">Navigation</span>
        </div>
        <div className="h-96 fenix-regular bg-gray-300 p-2">
          <span className="block mb-2">Home</span>
          <span className="block mb-2">APOD</span>
          <span className="block mb-2">Twacking</span>
          <span className="block mb-2">Staw schart</span>
        </div>
      </div>
    </>
  );
};

export default Navigation;
