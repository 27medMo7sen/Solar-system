import { useState } from "react";

export const Tabs = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex  overflow-x-auto  space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 hover:bg-Secondary-button-hover hover:text-white border rounded-t-lg mx-sm:py-1 ${
              activeTab === tab
                ? "bg-Secondary-button text-white font-semibold"
                : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
};
