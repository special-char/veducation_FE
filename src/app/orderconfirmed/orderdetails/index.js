import React from "react";
import OrderCode from "public/icons/orderCode.svg";
import Date from "public/icons/date.svg";
import Total from "public/icons/total.svg";
import Payment from "public/icons/payment.svg";
import Styles from "./orderDetails.module.css";
import Button from "../../../components/Button";
import Link from "next/link";

const details = {
  orderCode: "#85764564674646",
  date: "February 19, 2021",
  total: "$1,345.00",
  payment: "Cash on Delivery",
};

const OrderDetails = ({ orderCode, date, total, payment }) => {
  return (
    <div className={Styles.details}>
      <div className={Styles.details__heading}>
        <p className={Styles.details__hText}>Details</p>
      </div>
      <div className={Styles.details__detail}>
        <div className={Styles.details__border}>
          <div className={Styles.details__item}>
            <OrderCode />
            <p className={Styles.details__name}>Order code:</p>
          </div>
          <div className={Styles.details__value}>
            <p className={details.details__Text}>{orderCode}</p>
          </div>
        </div>

        <div className={Styles.details__detail}>
          <div className={Styles.details__item}>
            <Date />
            <p className={Styles.details__name}>Date:</p>
          </div>
          <div className={Styles.details__value}>
            <p className={details.item__Text}>{date}</p>
          </div>
        </div>

        <div className={Styles.details__border}>
          <div className={Styles.details__item}>
            <Total />
            <p className={Styles.details__name}>Total:</p>
          </div>
          <div className={Styles.details__value}>
            <p className={details.details__Text}>{total}</p>
          </div>
        </div>

        <div className={Styles.details__border2}>
          <div className={Styles.details__item}>
            <Payment />
            <p className={Styles.details__name}>Payment method:</p>
          </div>
          <div className={Styles.details__value}>
            <p className={details.details__iText}>{payment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
