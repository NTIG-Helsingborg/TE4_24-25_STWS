import React from "react";
import Title from "./Title";
import AboutText from "./AboutText";
import BreadText from "./BreadText";
import Read from "./Read";
import Images from "./Images";

const Content = async () => {

  return (
    <>
    <div className="m-8 mr-20 ml-64">
      <Title title="content"/>

      <div className="flex flex-row mt-8 relative">

        <AboutText aboutText="
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website
        this it text about the website"/>

        <Read read="read"/>

        <Images />

      </div>

      <BreadText breadText="this it the bread text"/>

    </div>
    </>
  
  );
};

export default Content;
