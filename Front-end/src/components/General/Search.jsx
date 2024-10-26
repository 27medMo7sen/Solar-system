import { FaSearch } from "react-icons/fa";
import { useState } from "react";
export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setResults([]);
      return;
    }
    setResults(
      [
        "Result 1",
        "Result 2",
        "Result 3",
        "Result 1",
        "Result 2",
        "Result 3",
        "Result 1",
        "Result 2",
        "Result 3",
        "Result 1",
        "Result 2",
        "Result 3",
        "ahmed",
        "mohsen",
      ].filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
          className="p-2 border w-96 mx-sm:w-72 mx-sm:animate-searchWidthSm border-gray-300 rounded-lg animate-searchWidth"
        />
        <FaSearch className="text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
      </div>
      {results.length > 0 && (
        <div className="mt-2 border border-gray-300 rounded-lg max-h-60 overflow-y-auto ">
          <ul>
            {results.map((result, index) => (
              <li
                key={index}
                className="p-2 border-b last:border-b-0 hover:bg-gray-300 cursor-pointer"
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
