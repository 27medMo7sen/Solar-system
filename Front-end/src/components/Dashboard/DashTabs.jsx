import { useState } from "react";

export const DashTabs = ({ tabs, children }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    return (
        <div className="flex w-full items-start">
            <div className="flex flex-col  justify-center mb-3 min-w-72">
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        className={`px-14 py-6 flex items-center gap-2 text-lg hover:bg-Primary-button hover:text-white font-bold ${activeTab === tab.label ? "bg-Primary-button-hover text-white" : ""
                            }`}
                        onClick={() => setActiveTab(tab.label)}
                    >
                        {tab.icon} 
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>
            <div className="">{children[activeTab]}</div>
        </div>
    );
};
