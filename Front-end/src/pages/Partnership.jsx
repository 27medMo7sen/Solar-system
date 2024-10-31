import Form from "../components/Partnership/Form";
import Head from "../components/Partnership/Header";
import Says from "../components/Partnership/Says";
import Verification from "../components/Partnership/Verification";
import WhyUs from "../components/Partnership/WhyUs";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { Fragment } from "react";
const Partnership = () => {
  
  const dispatch = useDispatch();
  dispatch(uiActions.clearPath());
  dispatch(
    uiActions.addToPathbar({ name: "Partnership", link: "/partnership" })
  );

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
