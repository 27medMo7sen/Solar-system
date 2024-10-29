import { Fragment } from "react";
import { Pathbar } from "../components/General/Pathbar";

export const PartnershipPage = () => {
  const path = [
    { name: "Partnership", link: "/partnership" },
  ];
  return (
    <Fragment>
      <Pathbar path={path} />
    </Fragment>
  );
};
