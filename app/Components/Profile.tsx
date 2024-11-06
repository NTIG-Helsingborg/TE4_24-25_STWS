"use client";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Profile = () => {
  const temp_localstore = localStorage.getItem("savedFav");
  if (!temp_localstore) {
    return <p>err</p>;
  }
  const [selected, setSelected] = useState<string[]>(
    JSON.parse(temp_localstore)
  );

  return (
    <>
      <div>
        <p>hello</p>
      </div>
      <div>
        {selected?.map((data, index) => {
          return (
            <div key={index}>
              <Card itemID={data} src="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
