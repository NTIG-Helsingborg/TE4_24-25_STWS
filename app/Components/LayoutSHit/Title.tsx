import React from 'react'

interface Props{
  title: string;
}

const Title = ({title}: Props) => {
  return (
    <>
    <div className="border-b-4">
        <h1 className="text-5xl">
            {title}
        </h1>
    </div>
    </>
  );
}

export default Title