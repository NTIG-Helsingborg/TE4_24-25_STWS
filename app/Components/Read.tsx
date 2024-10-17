import React from 'react'

interface Props{
    read: string;
}

const Read = ({read}: Props) => {
  return (
    <>
    <div className="absolute bottom-0 left-0 w-16 bg-gray-300 rounded text-center">
        <h6 className=" text-white">
            {read}
        </h6>
    </div>
    </>


  );
}

export default Read