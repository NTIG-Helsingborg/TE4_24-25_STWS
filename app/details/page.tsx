import React, { Suspense } from "react";
import Details from "../Components/Details";
import Display from "../Components/Display";
import Footer from "../Components/Footer";
import PlaceholderContent from "../Components/PlaceholderContent";
import PlaceHolder from "../Components/PlaceHolder";

const page = () => {
  return (
    <div>
      <Details />
      <Suspense fallback={<div>Loading data...</div>}>
        <Display />
      </Suspense>
      <Footer />
    </div>
  );
};

export default page;
