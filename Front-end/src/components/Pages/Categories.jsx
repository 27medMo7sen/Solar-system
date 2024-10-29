import { Fragment } from "react";
import { Pathbar } from "../components/General/Pathbar";
import { CategoriesList } from "../components/Categories/CategoriesList";


export const Categories = () => {
  const links = [
    {
      name: "Categories",
      link: "/categories",
    },
  ];
  return (
    <Fragment>
      <Pathbar path={links} />
      <CategoriesList/>
    </Fragment>
  );
};
