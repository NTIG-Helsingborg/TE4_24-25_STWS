"use client";

import { Suspense, useEffect, useState } from "react";
import ClientFetch from "./FunctioningShit/ClientFetch";

export default function SearchParams() {
  const [queryParam, setQueryParam] = useState<string | null>(null);

  useEffect(() => {
    // Ensure code only runs in the browser
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get("query");

      if (query) {
        setQueryParam(query);
      }
    }
  }, []);

  // Define the type for allowed categories
  type Category =
    | "people"
    | "planets"
    | "films"
    | "species"
    | "vehicles"
    | "starships";

  // Set default values for category and idTag
  let category: Category | null = null;
  let idTag: number | null = null;

  // Check if queryParam is not null before splitting
  if (queryParam) {
    // Split the string by the colon
    const [cat, tag] = queryParam.split(":") as [Category, string];

    // Validate category and convert tag to a number
    if (
      cat &&
      [
        "people",
        "planets",
        "films",
        "species",
        "vehicles",
        "starships",
      ].includes(cat)
    ) {
      category = cat;
      idTag = parseInt(tag);
    }
  }

  return (
    <div>
      <Suspense>
        {category && idTag !== null && (
          <ClientFetch
            params={{ id: idTag, catagory: category }}
            src="https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/"
          />
        )}
      </Suspense>
    </div>
  );
}
