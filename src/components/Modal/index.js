import React from "react";
import clx from "classnames";

const Modal = ({ open, onClose, className, ...props }) => {
  return (
    <dialog
      id="dialog"
      className={clx({
        "flex fixed h-full pt-24 bottom-0 w-screen bg-transparent flex-col p-0 m-0 z-20 backdrop-blur-sm backdrop-brightness-50 ":
          open,
      })}
      open={open}
      onClose={() => {
        onClose;
      }}
      {...props}
    >
      <div className={clx("flex-[0.5]")} onClick={onClose} />
      <section
        className={clx(
          "rounded-t-xl w-screen flex flex-col flex-1 pb-8 bg-background shadow-dark ",
          className
        )}
      >
        {props.children}
      </section>
    </dialog>
  );
};

export default Modal;
