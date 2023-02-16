import React from "react";
import OrderCode from "public/icons/orderCode.svg";
import Date from "public/icons/date.svg";
import Total from "public/icons/total.svg";
import Payment from "public/icons/payment.svg";
import Styles from "./OrderDetails.module.css";

const details = {
  orderCode: "#85764564674646",
  date: "February 19, 2021",
  total: "$1,345.00",
  payment: "Cash on Delivery",
};

const OrderDetails = () => {
  return (
    <div className={Styles.details}>
      <div className={Styles.details__heading}>
        <p className={Styles.details__hText}>Details</p>
      </div>
      <div className={Styles.details__detail}>
        <div className={Styles.border}>
          <div className={Styles.item}>
            <OrderCode />
            <p className={Styles.item__name}>Order code:</p>
          </div>
          <div className={Styles.item__value}>
            <p className={details.item__iText}>{details.orderCode}</p>
          </div>
        </div>

        <div className={Styles.border}>
          <div className={Styles.item}>
            <Date />
            <p className={Styles.item__name}>Date:</p>
          </div>
          <div className={Styles.item__value}>
            <p className={details.item__iText}>{details.date}</p>
          </div>
        </div>

        <div className={Styles.border}>
          <div className={Styles.item}>
            <Total />
            <p className={Styles.item__name}>Total:</p>
          </div>
          <div className={Styles.item__value}>
            <p className={details.item__iText}>{details.total}</p>
          </div>
        </div>

        <div className={Styles.border__noBorder}>
          <div className={Styles.item}>
            <Payment />
            <p className={Styles.item__name}>Payment method:</p>
          </div>
          <div className={Styles.item__value}>
            <p className={details.item__iText}>{details.payment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
