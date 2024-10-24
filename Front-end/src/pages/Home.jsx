import { Fragment } from "react";
import Hero from "../components/HomePage/Slider";
import HowItWorks from "../components/HomePage/HowItWorks";
import { PopularCategories } from "../components/HomePage/PopularCategories";
import { FeaturedProducts } from "../components/HomePage/FeaturedProducts";
export const Home = () => {
  return (
    <Fragment>
      <Hero />
      {/* <HowItWorks /> */}
      <PopularCategories />
      <FeaturedProducts />
    </Fragment>
  );
};
