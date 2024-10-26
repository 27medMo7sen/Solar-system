import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Details } from "../components/Product-details/Details";
import { Pathbar } from "../components/General/Pathbar";

export const ProductDetails = () => {
  const { name } = useParams();
  const path = [
    { name: "Products", link: "/products" },
    { name: "Product", link: `/product-details/${name}` },
  ];
  return (
    <Fragment>
      <Pathbar path={path} />
      <Details />
    </Fragment>
  );
};
