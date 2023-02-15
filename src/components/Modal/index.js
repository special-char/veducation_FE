import React from "react";
import clx from "classnames";

const Modal = ({ open, onClose, ...props }) => {
  return (
    <dialog
      className={clx("flex-col p-0 m-0", {
        "flex absolute top-0 h-screen w-screen opacity-50  bg-[#A33909]": open,
      })}
      open={open}
      onClose={onClose}
      {...props}
    >
      <div
        className={clx("flex-[0.5] w-full", { ...props.closerClassname })}
        onClick={onClose}
      />
      <section className=" flex-1 rounded-t-lg w-screen bg-background">
        {props.children}
      </section>
    </dialog>
  );
};

export default Modal;
