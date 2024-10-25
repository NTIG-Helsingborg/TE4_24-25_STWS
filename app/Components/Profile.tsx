import React, { useEffect, useState } from "react";
import Card from "./Card";

const Profile = () => {
  const favSelected = localStorage.getItem("selected");
  const [selected, setSelected] = useState(``);

  useEffect(() => {
    localStorage.setItem(``);
    const setSelected = localStorage.getItem();
  });

  return (
    <>
      <div>
        <div></div>

        {/* div for favorite*/}
        <div>
          <Card itemID={selected} />
        </div>
      </div>
    </>
  );
};

export default Profile;
