import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { Fragment, useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(uiActions.clearPath());
    dispatch(uiActions.addToPathbar({ name: "Dashboard", link: "/dashboard" }));
  }, [dispatch]);

  return (
    <Fragment>
      <Dashboard />
    </Fragment>
  );
};

export default DashboardPage;
