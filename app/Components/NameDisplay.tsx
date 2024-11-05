"use client";

import React from "react";
import { useSession as UseSession } from "next-auth/react";

const NameDisplay = () => {
  const { data: session } = UseSession();

  return (
    <>
      <span className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-2xl text-md ml-24">
        {session?.user?.email}
      </span>
    </>
  );
};

export default NameDisplay;
