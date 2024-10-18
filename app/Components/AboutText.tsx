import React from 'react';
import { ReactNode } from 'react';

interface Props {
  aboutText: string;
  children?: ReactNode;
}

const AboutText = ({ aboutText, children }: Props) => {
  return (
    <>
      <div className="md:flex md:basis-2/3 flex-col justify-between">
        <div>
          <p className="text-base break-words">
            {aboutText}
          </p>
        </div>
        {/* Use flexbox to position the children at the bottom */}
        <div className="mt-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default AboutText;
