import React from 'react'

interface Props{
  breadText: string;
}

const BreadText = ({breadText}: Props) => {
  return (
    <>
    <div className="bg-gray-300 p-1 mt-8 h-96">
      <p className="text-white">{breadText}</p>
    </div>
    </>
  );
}

export default BreadText