"use client";

import { Suspense, useEffect, useState } from "react";
import ClientConverter from "./ClientConverter";

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

  return (
    <div>
      <Suspense>
        {queryParam && <ClientConverter itemID={queryParam} />}
      </Suspense>
    </div>
  );
}
