import { Fragment } from "react";
import { CategoriesList } from "../components/Categories/CategoriesList";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
export const Categories = () => {
  const dispatch = useDispatch();
  dispatch(uiActions.addToPathbar({ name: "Categories", link: "/categories" }));
  return (
    <Fragment>
      <CategoriesList/>
    </Fragment>
  );
};
