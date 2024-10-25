import { ProductDetails } from "./SectionsParts/Features/ProductDetails";
import { Tabs } from "./SectionsParts/Features/Tabs";
import { MainReviews } from "./SectionsParts/reviews/MainReviews";

export const Sections = () => {
  const tabs = [
    "Description",
    "Customer reviews",
    "Guide and info",
    "Shipping info",
  ];

  const tabContent = {
    Description: <ProductDetails />,
    "Customer reviews": <MainReviews />,
    "Guide and info": <div>Guide and info content...</div>,
    "Shipping info": <div>Shipping info content...</div>,
  };

  return (
    <div className="max-w-sections mx-lg:max-w-main-card mx-lg:mx-8 mx-sm:mx-1 py-8">
      <Tabs tabs={tabs}>{tabContent}</Tabs>
    </div>
  );
};
