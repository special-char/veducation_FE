"use client";
import Button from "@/components/Button";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Image from "next/image";

import { ProductContext } from "@/context/ProductContextProvider";
import PopupModal from "../popupModal";
import TickIcon from "public/tickicon.svg";

const BackHome = () => {
  const {
    state: { signIn: open },
    dispatch,
  } = useContext(ProductContext);
  function toggleModal() {
    dispatch({ signIn: false });
  }

  return (
    <div>
      {/* <Button onClick={toggleModal} as={Link} href="">
        Open
      </Button> */}
      <PopupModal
        open={open}
        onClose={toggleModal}
        className="flex-1 flex flex-col gap-3 py-5 px-3 items-center"
      >
        <div className=" pb-4 mx-auto">
       <TickIcon />
          </div>
        <div className="text-center ">
          <h3 className="font-black  text-2xl">Thanks for Inviting</h3>
          <p className=" text-sm  mb-3 pb-4">We will revert as soon as possible</p>
          <Button
            as={Link}
            href=""
            variant="primary"
            size="small"
            className={"w-full mt-3 text-sm"}
          >
            Back Home
          </Button>
        </div>
        
      </PopupModal>
    </div>
  );
};

export default BackHome;
