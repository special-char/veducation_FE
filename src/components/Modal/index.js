import React from "react";
import clx from "classnames";

const Modal = ({ open, onClose, className, ...props }) => {
  return (
    <dialog
      className={clx(
        "flex-col p-0 m-0 z-30 backdrop-blur-sm backdrop-brightness-50 ",
        {
          "flex absolute top-0 h-screen w-screen bg-transparent ": open,
        }
      )}
      open={open}
      onClose={onClose}
      {...props}
    >
      <div className={clx(" w-full flex-1")} onClick={onClose} />
      <section
        className={clx(
          "rounded-t-xl w-screen flex-[1] bg-background shadow-dark ",
          className
        )}
      >
        {props.children}
      </section>
    </dialog>
  );
};

export default Modal;
