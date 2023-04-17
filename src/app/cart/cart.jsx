import React, { use } from "react";
import ProductConfirm from "../../components/ProductConfirm/productConfirm";
import Tshirt from "public/tshirt.png";
import CourseCart from "@/components/courseCart/courseCart";
import { getProductData } from "@/lib/getHomeProductData";
import { getUser } from "@/lib/getUser";
import { getBillingDetails } from "@/lib/getBillingDetails";
import CartItemList from "./CartItemList";
import { getCourseDetails } from "@/lib/getCourseDetails";
import { getPromoCode } from "@/lib/getPromoCode";
import CourseCheckout from "./CourseCheckout";

const data = {
  orderPrice: "75",
  totalAmount: "95",
  title: "Veducation T Shirt - Mens Tshirt Pure Black",
  price: "55$",
};

const CartPage = async (props) => {
  const user = await getUser();
  const billingData = await getBillingDetails();
  const course = await getCourseDetails(props?.searchParams?.course);
  const promocodes = await getPromoCode();

  return (
    <div className=" flex flex-col gap-2 h-full justify-between">
      <div className="flex flex-col ">
        {props?.searchParams?.course ? (
          <>
            <ProductConfirm
              image={course?.data?.attributes?.img?.data?.attributes?.url}
              title={course?.data?.attributes?.title}
              price={`$${course?.data?.attributes?.price}`}
              quantity={1}
              // key={x?.id}
              isCourse
              attributes={course?.data?.attributes}
            />
            <CourseCheckout
              users={user}
              course={course}
              promocodes={promocodes}
              className="gap-y-16"
            />
          </>
        ) : (
          <>
            <CartItemList />
            <CourseCart
              users={user}
              data={billingData}
              title={data.title}
              promocodes={promocodes}
              price={data.price}
              orderPrice={data.orderPrice}
              totalAmount={data.totalAmount}
              className="gap-y-16"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
