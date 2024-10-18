import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Slider/Slider";

export const Root = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Outlet />
    </Fragment>
  );
};
