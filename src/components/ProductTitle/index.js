import Link from "next/link";
import React from "react";

const ProductTitle = ({ title, link }) => {
  return (
    <section>
      <div className="flex justify-between items-center py-4 ">
        <h5 className="mb-0 text-xl font-bold">{title}</h5>
        {link && <Link href={link}>{"View All"}</Link>}
      </div>
    </section>
  );
};

export default ProductTitle;
