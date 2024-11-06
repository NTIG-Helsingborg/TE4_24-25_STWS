import React from "react";
import Test from "./client_test";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <div>
      <Test initialIndex={0} length={10} type={(await params).slug} />
    </div>
  );
};

export default page;
