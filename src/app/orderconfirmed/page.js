import OrderdItem from "@/components/oderedItem/orderedItem";
import React from "react";
import OrderSucess from "./OrderConfirm/OrderConfirm";
import OrderDetails from "./Orderdetails";
import Tshirt from "public/tshirt.png";
import Link from "next/link";
import Button from "@/components/Button";
import PurchasedItems from "./PurchasedList";
import { getUser } from "@/lib/getUser";
import { headers } from "next/headers";
import axios from "axios";
import { getPuchasedItems } from "@/lib/getPurchasedItems";
import { dateFormat } from "@/utils/constants";

const items = [
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "25.00",
    quantity: "3",
    // arriving: "12 june",
    deliveredOn: "13 june",
  },
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "25.00",
    quantity: "3",
    // arriving: "12 june",
    deliveredOn: "13 june",
  },
  {
    img: Tshirt,
    item: "Veducation T Shirt - Mens Tshirt Pure Black",
    price: "25.00",
    quantity: "3",
    // arriving: "12 june",
    deliveredOn: "13 june",
  },
];

const details = {
  orderCode: "#85764564674646",
  date: "February 19, 2021",
  total: "$1,345.00",
  payment: "Cash on Delivery",
};

export async function getSessionUser(cookie) {
  try {
    const response = await axios.get(`http://localhost:3000/api/auth/session`, {
      headers: {
        cookie,
      },
    });

    return Object.keys(response.data).length > 0 ? response.data : null;
  } catch (error) {
    console.log(error);
  }
}

const Page = async (props) => {
  const session = await getSessionUser(headers().get("cookie") ?? "");
  const users = await getUser();
  const user = users?.find((item) => item?.email === session?.user?.email);
  const currentCartIds = props?.searchParams?.cartItems?.split(",");
  const purchaseData = await getPuchasedItems(user?.id);

  const productList = purchaseData?.data
    ?.filter((item) => {
      for (let i = 0; i < currentCartIds?.length; i++) {
        const ci = currentCartIds[i];
        if (item?.id == ci) return item;
      }
    })
    .map((x) => {
      return {
        ...x?.attributes?.product?.data?.attributes,
        ...x?.attributes?.purchase?.data?.attributes,
        ...x.id,
      };
    });

  console.log({ userrrr: user, purchaseData });

  return (
    <section className="px-container md:p-0 pt-4 flex flex-col gap-5">
      <OrderSucess date={`${productList[0]?.date}`} />
      <div>
        <PurchasedItems
          {...props}
          currentCartIds={currentCartIds}
          purchaseData={purchaseData} 
          user={user}
        />
      </div>
      <OrderDetails
        orderCode={productList[0]?.orderCode}
        date={
          `${dateFormat.format(new Date(productList[0]?.date))}` ?? "4/10/2023"
        }
        total={`$ ${productList
          ?.reduce((p, c) => {
            return (p + c.price * c.items) * 1.07;
          }, 0)
          ?.toFixed(2)}`}
        payment={details.payment}
      />
      <Button
        as={Link}
        href="/orders"
        size="large"
        className="w-full text-base py-4"
        variant="primary"
      >
        Order History
      </Button>
    </section>
  );
};

export default Page;
