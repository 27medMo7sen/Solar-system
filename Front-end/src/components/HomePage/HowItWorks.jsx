import { useState, useEffect } from "react";
import { howItWorksData } from "../../Data";
import { PiArrowArcRight } from "react-icons/pi";

const HowItWorks = () => {
  const [selectedOption, setSelectedOption] = useState("clients");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <div className="relative py-20 p-10">
      <h1 className="text-gray-900 text-4xl font-extrabold text-center mb-12 tracking-wide">
        How It Works
      </h1>
      <div className="mb-7">
        <div className="flex items-center justify-center space-x-4">
          <label
            className={`flex items-center px-4 py-2 border rounded-lg cursor-pointer h-12 w-52 ${selectedOption === "clients"
              ? "bg-orange-50 border-orange-500 text-black"
              : "border-gray-300"
              }`}
          >
            <input
              type="radio"
              name="userType"
              value="clients"
              className="mr-2"
              checked={selectedOption === "clients"}
              onChange={() => setSelectedOption("clients")}
            />
            For Clients
          </label>
          <label
            className={`flex items-center px-4 py-2 border rounded-lg cursor-pointer h-12 w-52 ${selectedOption === "companies"
              ? "bg-orange-50 border-orange-500 text-black"
              : "border-gray-300"
              }`}
          >
            <input
              type="radio"
              name="userType"
              value="companies"
              className="mr-2"
              checked={selectedOption === "companies"}
              onChange={() => setSelectedOption("companies")}
            />
            For Companies
          </label>
        </div>
      </div>
      <div className={`relative max-w-6xl mx-auto grid grid-cols-3 gap-14 ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}>
        {howItWorksData.map((card, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center mb-5">
              <img
                src={card.img}
                alt="icon"
                className="w-20 h-20 rounded-full object-cover transition-transform duration-300 ease-in-out hover:rotate-6"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold capitalize text-gray-900 mb-2">{card.text}</h3>
              <p className="text-gray-500 leading-relaxed">{card.subtext}</p>
            </div>
            {index < howItWorksData.length - 1 && (
              <PiArrowArcRight   className="absolute top-1/2 transform -translate-y-1/2 right-[-50px] z-10 w-20 h-20 animate-bounce text-orange-400"/>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
