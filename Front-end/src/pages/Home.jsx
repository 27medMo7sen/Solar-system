import { Fragment } from "react";
import Hero from "../components/Slider/Slider";
import HowItWorks from "../components/HowItWorks/HowItWorks";

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <HowItWorks />
    </Fragment>
  );
};
