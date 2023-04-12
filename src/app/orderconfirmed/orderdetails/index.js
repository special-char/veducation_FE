import React from "react";
import OrderCode from "public/icons/orderCode.svg";
import Date from "public/icons/date.svg";
import Total from "public/icons/total.svg";
import Payment from "public/icons/payment.svg";
import Styles from "./orderDetails.module.css";

const OrderDetails = ({ orderCode, date, total, payment }) => {
  const details = [
    {
      svg: <OrderCode />,
      title: "OrderCode",
      data: orderCode,
    },
    // { svg: <Date />, title: "Date", data: date },
    { svg: <Total />, title: "Total", data: total },
    { svg: <Payment />, title: "Payment method", data: "Cash on Delivery" },
  ];
  return (
    <div className={Styles.details}>
      <h5 className={Styles.details__heading}>Details</h5>
      <div className={Styles.details__detail}>
        {details.map((val, index) => {
          return (
            <div key={index} className={Styles.details__border}>
              <div className={Styles.details__item}>
                {val.svg}
                <p className={Styles.details__name}>{val.title}:</p>
              </div>
              <p className={Styles.details__Text}>{val.data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OrderDetails;
