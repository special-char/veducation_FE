import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  console.log("location:", location);
  return <div>BreadCrumbs</div>;
};

export default Breadcrumbs;
