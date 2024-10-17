import React from 'react'

interface Props{
  aboutText: string;
}

const AboutText = ({aboutText}: Props) => {
  return (
    <>
    <div className="flex basis-2/3 mb-8">
      <div>
        <p>
          {aboutText}
        </p>
      </div>
  </div>
  </>
  );
}

export default AboutText