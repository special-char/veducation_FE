import React from "react";
import styles from "./productItem.module.css";
import Image from "next/image";
import Reviews from "../Reviews";
import ProductTitle from "../ProductTitle";
import Link from "next/link";
import { getCategoryData } from "@/lib/getHomeProductData";

export const ProductItem = async ({
  attributes: { posterImageUrl, title, name, author, subtitle },
  id,
}) => {
  return (
    <div className={styles.product_item}>
      <div className={styles.product_item__image}>
        {/* <Image
          src={posterImageUrl}
          fill
          alt="book"
          className="px-3 pt-2"
          sizes=""
        /> */}
      </div>
      <div className={styles.product_item__desc}>
        <p className={styles.product_item__name}>{title}</p>

        {/* <p className={styles.product_item__author}>{weight && weight}</p>
        <p className={styles.product_item__author}>{content && content}</p> */}
        <p className={styles.product_item__author}>{`by ${
          author && author
        }`}</p>
        <Reviews
          disabled
          height={9.31}
          id={id}
          width={8.96}
          rate={3.5}
          count={100}
        />
      </div>
    </div>
  );
};
// export const Item = async ({
//   attributes: { posterImageUrl, title, name, author, subtitle },
// }) => {
//   return (
//     <div
//       className={
//         "flex flex-col flex-1 bg-transparent xs:p-2 md:p-3 border border-neutral-250 rounded-md max-w-[123px]"
//       }
//     >
//       <div className={"relative aspect-image flex-1 flex"}>
//         <Image
//           src={posterImageUrl}
//           fill
//           alt="book"
//           className="object-contain"
//           // sizes="(max-width: 768px) 100vw,
//           //     (max-width: 1200px) 50vw,
//           //     33vw"
//         />
//       </div>
//       <div className="flex flex-col flex-1 mt-2">
//         <p className={"text-neutral-700 text-[11px] leading-4"}>{title}</p>
//         <p className={"text-xs font-bold text-[9px] leading-4"}>
//           {author && `by ${author}`}
//           {subtitle && subtitle}
//         </p>
//         {/* <p className={styles.product_item__author}>{weight && weight}</p>
//         <p className={styles.product_item__author}>{content && content}</p> */}
//         <Reviews rate={3.5} count={100} />
//       </div>
//     </div>
//   );
// };

const Productlist = async ({ id }) => {
  const productData = await getCategoryData(id);

  // const {
  //   attributes: { name, products },
  // } = productData?.data;

  console.log({ productData });

  return (
    <div className="flex flex-col">
      {/* <ProductTitle
        title={name}
        val={products.data.length > 0}
        link={`/products/${id}`}
      />
      <div className="flex overflow-x-scroll no-scrollbar gap-[5px]">
        {products.data.length > 0 ? (
          products?.data.map((val) => {
            return (
              <Link key={val.id} href={`/product/${val.id}`}>
                <ProductItem {...val} />
              </Link>
            );
          })
        ) : (
          <div className="h-20  w-full flex items-center justify-center">
            <span className="bg-primary text-white font-semibold text-sm text-center px-10 py-2 rounded-md">
              No {name} available
            </span>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Productlist;
