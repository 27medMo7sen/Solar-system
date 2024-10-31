import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../components/HomePage/Slider";
import HowItWorks from "../components/HomePage/HowItWorks";
import { PopularCategories } from "../components/HomePage/PopularCategories";
import { FeaturedProducts } from "../components/HomePage/FeaturedProducts";
import Partners from "../components/HomePage/Partners";
import { uiActions } from "../store/ui-slice";
import FAQS from "../components/General/FAQS";
export const Home = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(uiActions.addToPathbar({ name: "Home", link: "/" }));
    }, [dispatch]);
  return (
    <Fragment>
      <Hero />
      <HowItWorks />
      <PopularCategories />
      <FeaturedProducts />
      <Partners />
      <FAQS />
    </Fragment>
  );
};
