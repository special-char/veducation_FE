import Link from "next/link";
import React from "react";

const ProductTitle = ({ title, link, val }) => {
  return (
    <div className="flex justify-between items-center pt-[17px] pb-[15px]">
      <h5 className="mb-0  font-bold leading-[120%]">{title}</h5>
      {link && (
        <Link
          className={
            val
              ? `text-sm2 font-medium leading-[14.4px] border-b border-b-background2`
              : "hidden"
          }
          href={link}
        >
          {"View All"}
        </Link>
      )}
    </div>
  );
};

export default ProductTitle;
