import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { PriceSlider } from "./PriceSlider";
export const ApiFeatures = () => {
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
  const [rangeChange,setRangeChange] = useState({min:200,max:1000});
  const handleRangeChange = (range) => {
    setRangeChange(range);
  }
  return (
    <div className="flex flex-col gap-5 justify-center ">
      <div className=" flex h-10 justify-center">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border w-96 mx-sm:w-60 mx-sm:animate-searchWidthSm border-gray-300 rounded-l-lg animate-searchWidth"
        />
        <button className="bg-Primary-button rounded-r-lg hover:bg-Primary-button-hover h- text-white font-semibold py-2 px-6 "
        onClick={handleSearch}
        >
           <FaSearch/>
        </button>
    
      </div>
      {results.length > 0 && (
        <div className="mt-2 border z-20 border-gray-300 rounded-lg max-h-60 overflow-y-auto ">
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
      <div className="flex justify-center gap-2">
        <select className="border border-gray-100 appearance-none rounded-md py-2 px-3 cursor-pointer hover:bg-gray-200">
          <option selected hidden disabled value="">Category</option>
          <option  value="ctegory1">Category 1</option>
          <option  value="ctegory2">Category 2</option>
          <option  value="ctegory3">Category 3</option>
        </select>
          <select className="border border-gray-100 rounded-md px-3 py-2 appearance-none cursor-pointer hover:bg-gray-200">
            <option value="" disabled selected hidden>Brand</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            <option value="brand3">Brand 3</option>
          </select>
          <select className="border border-gray-100 rounded-md px-3 py-2 appearance-none cursor-pointer hover:bg-gray-200">
            <option value="" disabled selected hidden>sort by</option>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
          </select>
          
      </div>
      <PriceSlider min={200} max={1000} onChange={handleRangeChange} />
    </div>
  );
 }