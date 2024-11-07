import React from "react";
import Converter from "../FunctioningShit/Converter";

const CardList = () => {
  return (
    <>
      <div className="container mx-auto p-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Converter itemID="planets:1" />
        </div>
      </div>
    </>
  );
};

export default CardList;
