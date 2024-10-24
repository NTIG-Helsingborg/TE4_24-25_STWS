import React from "react";
import Title from "./Title";
import AboutText from "./AboutText";
import BreadText from "./BreadText";
import Read from "./Read";
import Images from "./Images";

const Content = async () => {
  return (
    <>
      <div className="m-8">
        {/* Page title */}
        <Title title="content" />

        {/* Main content section */}
        <div className="flex md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8 flex-col-reverse">
          {/* About Text */}
          <AboutText
            aboutText="
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            This is text about the website.
            "
          >
            {" "}
            <Read read="read" />{" "}
          </AboutText>

          {/* Image section */}
          <Images />

          {/* Read section */}
        </div>

        {/* Bread text section */}
        <BreadText breadText="This is the bread text" />
      </div>
    </>
  );
};

export default Content;
