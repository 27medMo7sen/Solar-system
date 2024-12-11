import Form from "../components/Partnership/Form";
import Head from "../components/Partnership/Header";
import Says from "../components/Partnership/Says";
import Verification from "../components/Partnership/Verification";
import WhyUs from "../components/Partnership/WhyUs";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { Fragment, useEffect } from "react";

const Partnership = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(uiActions.clearPath());
    dispatch(uiActions.addToPathbar({ name: "Partnership", link: "/partnership" }));
  }, [dispatch]);

  return (
    <Fragment>
      <Head />
      <WhyUs />
      <Form />
      <Verification />
      <Says />
    </Fragment>
  );
};

export default Partnership;

