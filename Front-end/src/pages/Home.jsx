import { Fragment } from "react";
import Hero from "../components/Slider/Slider";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import { PopularCategories } from "../components/PopularCategories/PopularCategories";
import { FeaturedProducts } from "../components/FeaturedProducts/FeaturedProducts";
export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <HowItWorks />
      <PopularCategories />
      <FeaturedProducts />
    </Fragment>
  );
};
