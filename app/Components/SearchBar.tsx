"use client";

import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import sampleData from "@/the_file_tm.json";
// Define the type for the data items
interface DataItem {
  id: number;
  name: string;
}
let global_timer = 0;
const data: DataItem[] = Object.entries(
  sampleData as unknown as { [id: string]: [string, number][] }
)
  .map((val) => {
    return val[1].map((ival) => {
      return {
        id: global_timer++,
        name: ival[0], //`${val[0]}:${ival[0]}:${ival[1]}`,
      };
    });
  })
  .flat(2);
const SearchBar = () => {
  const router = useRouter();
  const [texts, setTexts] = useState<string>(""); // Search query from the user
  const [results, setResults] = useState<DataItem[]>([]); // Search results to display

  // Automatically filter results as the user types
  useEffect(() => {
    if (texts) {
      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(texts.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]); // Clear results if no input
    }
  }, [texts]); // Use texts as a dependency to trigger filtering on change

  // Optionally, a function to handle search button click or "Enter" key press
  const handleSearch = () => {
    if (texts) {
      router.push(`/the_file_tm.json?search=${texts}`);
    }
  };

  // Handle the "Enter" key press to trigger search
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative rounded-md shadow-sm">
      <input
        value={texts}
        placeholder="Search"
        onChange={(event) => setTexts(event.target.value)} // Dynamically update text state
        onKeyDown={handleKeyPress} // Add event listener for "Enter" key
        className="block pl-8 pr-3 py-2 w-full rounded-md border-gray-300 focus:ring-green-500 focus:border-green-500"
      />
      <button
        onClick={handleSearch} // Trigger search on button click
        className="absolute right-2 top-2 text-green-400"
      >
        <FaMagnifyingGlass aria-hidden="true" />
      </button>
      {texts && (
        <div className="absolute mt-1 bg-white border rounded-md w-full z-10">
          {results.length > 0 ? (
            results.map((result) => (
              <div key={result.id} className="p-2 hover:bg-gray-100">
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
