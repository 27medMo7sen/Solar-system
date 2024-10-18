import { Fragment } from "react";
import { Outlet } from "react-router-dom";
export const Root = () => {
  return (
    <Fragment>
      <h1 className="text-3xl text-red-900 font-bold underline">
        Testing Tailwind
      </h1>
      <Outlet />
    </Fragment>
  );
};
