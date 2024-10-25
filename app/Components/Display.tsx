import React from "react";

import Converter from "./Converter";
import ApiCall from "./ApiCall";
import Card from "./Card";
import { getMessage } from "./ServerAction";

const Display = async () => {
  const count = await getMessage();
  return (
    <div>
      <Converter
        itemID={count}
        src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.pn"
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
