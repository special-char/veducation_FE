import React from "react";
import clx from "classnames";

const PopupModal = ({ open, onClose, className, ...props }) => {
  return (
    <dialog
      id="dialog"
      className={clx(
        "flex-col p-0 m-0 z-30 backdrop-blur-sm backdrop-brightness-50 ",
        {
          "flex fixed top-0 h-screen w-screen bg-transparent ": open,
        }
      )}
      open={open}
      onClose={onClose}
      {...props}
    >
      <div className={clx(" w-full flex-1")} onClick={onClose} />
      <section
        className={clx(
          "xs:mx-3 lg:mx-[50vh] rounded-xl flex-1 bg-background shadow-dark",
          className
        )}
      >
        {props.children}
      </section>
      <div className={clx(" w-full flex-1")} onClick={onClose} />
    </dialog>
  );
};

export default PopupModal;
