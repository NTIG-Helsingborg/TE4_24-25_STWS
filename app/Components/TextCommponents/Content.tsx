import React from "react";
import Title from "../LayoutSHit/Title";
import AboutText from "./AboutText";
import Read from "../FunctioningShit/Read";
import Drawer from "../LayoutSHit/Drawer";

const Content = async () => {
  return (
    <>
      <Drawer>
        <div className="m-8">
          {/* Page title */}
          <Title title="content" />

          {/* Main content section */}
          <div className="flex md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8 flex-col-reverse">
            {/* About Text */}
            <AboutText
              aboutText="
            This project is built using React and Next.js,
            We are a team of four developers.
            The main focus of this project is to showcase Star Wars characters, planets, and other related information. 
            To achieve this, we’re leveraging a Star Wars API that provides data about various elements in the Star Wars universe. 
            This API allows us to retrieve information about characters, planets, and other lore, which we then display in 
            an organized and visually appealing format for users.
            "
            >
              <Read read="read" />
            </AboutText>
            <a href="/navigation" className="btn btn-primary">
              vist this
            </a>

            {/* Image section */}

            {/* Read section */}
          </div>

          {/* Bread text section */}
        </div>
      </Drawer>
    </>
  );
};

export default Content;
