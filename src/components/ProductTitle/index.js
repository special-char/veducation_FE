import React from "react";

const ProductTitle = ({ title, link }) => {
  return (
    <section>
      <div className="flex justify-between items-center py-4 ">
        <h5 className="mb-0 text-xl font-bold">{title}</h5>
        <span>{link}</span>
      </div>
    </section>
  );
};

export default ProductTitle;
