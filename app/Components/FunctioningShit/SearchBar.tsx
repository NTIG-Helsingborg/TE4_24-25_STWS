"use client";

import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import sampleData from "@/the_file_tm.json"; // Import the JSON data

interface DataItem {
  id: number;
  name: string;
  custom: [string, number];
}

let global_timer = 0;
const data: DataItem[] = Object.entries(
  sampleData as unknown as { [id: string]: [string, number][] }
)
  .map((val) => {
    return val[1].map((ival) => ({
      id: global_timer++, // Use actual ID from the data
      name: ival[0],
      custom: [val[0], ival[1]] as [string, number],
    }));
  })
  .flat(2);

const SearchBar = () => {
  const router = useRouter();
  const [texts, setTexts] = useState<string>(""); // Search query
  const [results, setResults] = useState<DataItem[]>([]); // Search results

  useEffect(() => {
    if (texts) {
      const filteredResults = data
        .filter((item) => item.name.toLowerCase().includes(texts.toLowerCase()))
        .slice(0, 10); // Limit results
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [texts]);

  const handleSearch = (item: DataItem) => {
    // Navigate to dynamic route for corresponding item
    router.push(`/details/?query=${item.custom[0]}:${item.custom[1]}`);
  };

  return (
    <div className="relative rounded-md shadow-sm">
      <input
        value={texts}
        placeholder="Search"
        onChange={(event) => setTexts(event.target.value)}
        className="block pl-8 pr-3 py-2 w-full rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500"
      />
      <button className="absolute right-2 top-2 text-green-400">
        <FaMagnifyingGlass aria-hidden="true" />
      </button>

      {texts && (
        <div className="absolute mt-1 bg-white border rounded-md w-full z-50">
          {results.length > 0 ? (
            results.map((result) => (
              <div
                key={result.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSearch(result)}
              >
                {result.name}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
