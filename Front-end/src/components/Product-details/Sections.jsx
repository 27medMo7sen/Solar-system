import { ProductDetails } from "./SectionsParts/Features/ProductDetails";
import { Tabs } from "./SectionsParts/Tabs";
import { MainReviews } from "./SectionsParts/reviews/MainReviews";

export const Sections = () => {
  const tabs = [
    "Description",
    "Customer reviews",
    "Guide and info",
    "Shipping info",
  ];

  const tabContent = {
    "Description": <ProductDetails />,
    "Customer reviews": <MainReviews />,
    "Guide and info": <div>Guide and info content...</div>,
    "Shipping info": <div>Shipping info content...</div>,
  };

  return (
    <div className="max-w-sections w-full mb-3 border-b-2">
      <div className="flex flex-col">
        <Tabs tabs={tabs}>{tabContent}</Tabs>
      </div>
    </div>
  );
};
