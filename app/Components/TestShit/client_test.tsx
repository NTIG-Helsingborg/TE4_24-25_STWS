"use client";

import { useState } from "react";
import _sampleData from "@/the_file_tm.json";
import NextButton from "@/app/Components/FunctioningShit/NextButton";
import PreviousButton from "@/app/Components/FunctioningShit/PreviousButton";
import ClientConverter from "@/app/Components/ClientConverter";

const sampleData = _sampleData as { [index: string]: (string | number)[][] };

export default function Test({
  initialIndex = 0,
  length,
  type,
}: {
  initialIndex?: number;
  length: number;
  type: string;
}) {
  const [index, setIndex] = useState(initialIndex);

  // Check if type is valid
  if (
    ![
      "people",
      "planets",
      "films",
      "species",
      "vehicles",
      "starships",
    ].includes(type)
  ) {
    return <p>err no type of {type}</p>;
  }

  // Calculate max pages based on length of data
  const maxIndex = Math.floor(sampleData[type].length / length) - 1;

  const handleNext = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <>
      {/*<p style={{ whiteSpace: "pre" }}>
        {`pages: ${maxIndex + 1}\nlast page number elem: ${
          sampleData[type].length % length
        }`}
      </p>*/}

      {sampleData[type]
        .slice(index * length, index * length + length)
        .map((ival) => {
          return [type, ival[1]].join(":");
        })
        .flat(1)
        .map((val, i) => (
          <ClientConverter key={i} itemID={val} />
        ))}

      <div className="flex flex-row justify-center space-x-10 mt-4">
        <PreviousButton onClick={handlePrevious} disabled={index <= 0} />
        <NextButton onClick={handleNext} disabled={index >= maxIndex} />
      </div>
    </>
  );
}
