import React from "react";

interface Props {
  text: string;
}

const Circle = ({ text }: Props) => {
  return (
    <div className="rounded-full w-8 h-8 flex items-center justify-center text-black bg-white ">
      {text}
    </div>
  );
};

export default Circle;
