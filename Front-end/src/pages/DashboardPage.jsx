import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { Fragment, useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
const DashboardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]); 
  const dispatch = useDispatch();
  dispatch(uiActions.clearPath());
  dispatch(
    uiActions.addToPathbar({ name: "Dashboard", link: "/dashboard" })
  );
  return (
    <Fragment>
      <Dashboard />
    </Fragment>
  );
};

export default DashboardPage;
