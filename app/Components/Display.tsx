import React from "react";
import Card from "./Card";

interface DisplayProps {
  value: string; // Type the prop
}

const Display = ({ value }: DisplayProps) => {
  return (
    <div>
      <Card
        itemID={value || "planet:1"}
        src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
      />
    </div>
  );
};

export default Display;

{
  /*<Card
      itemID={value}
      src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png"
    />*/
}
