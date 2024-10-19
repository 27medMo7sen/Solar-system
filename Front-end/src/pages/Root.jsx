import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Slider/Slider";

import { Footer } from "../components/footer/Footer";

export const Root = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </Fragment>
  );
};
