import Link from "next/link";
import React from "react";
import styles from "./producttitle.module.css";

const ProductTitle = ({ title, link }) => {
  return (
    <div className={styles.producttitle}>
      <h5 className={styles.producttitle__title}>{title}</h5>
      {link && (
        <Link
          className="text-sm2 font-medium leading-[14.4px] border-b border-b-background2"
          href={link}
        >
          {"View All"}
        </Link>
      )}
    </div>
  );
};

export default ProductTitle;
