import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Details } from "../components/Product-details/Details";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
  export const ProductDetails = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  },[]);  
  const { name } = useParams();
  const dispatch = useDispatch();
  dispatch(uiActions.addToPathbar({ name: name, link: `/product-details/${name}` }));
  return (
    <Fragment>
      <Details />
    </Fragment>
  );
};
