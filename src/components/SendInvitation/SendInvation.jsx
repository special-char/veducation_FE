"use client";
import Button from "@/components/Button";
import Link from "next/link";
import React, { useContext } from "react";
import Input from "@/components/InputComponent";
import { ProductContext } from "@/context/ProductContextProvider";
import PopupModal from "../popupModal";
import Textarea from "../InputComponent/textarea";

const SendInvitation = () => {
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
        className="flex-1 flex flex-col gap-3 py-5 px-3"
      >
        <div>
            <span className="ml-1 font-semibold ">Invite Us</span>
        <div className="relative py-2">
            <h5 className="absolute left-3 top-5 text-xs font-medium text-neutral-150">Name</h5>
            <Input
              // label="Email/Phone"
              placeholder=""
              className="w-full pt-6 "
            />
        </div>
        <div className="relative">
             <h5 className="absolute left-3 top-2 text-xs font-medium text-neutral-150">Email</h5>
            <Input
              // label="Email/Phone"
              placeholder=""
              className="w-full pt-6"
            />
        </div>
        <div className="relative py-2">
             <span className="absolute left-3 top-5 text-xs font-medium text-neutral-150">Invitation Details</span>
            
             <Textarea
             rows="3" 
         placeholder=""
         className="w-full pt-6 "/>
        </div>
       
        <Button
            as={Link}
            href=""
            variant="primary"
            size="small"
            className={"w-full mt-5 "}
          >
            Send Invitation
          </Button>
         
        </div>
      </PopupModal>
    </div>
  );
};

export default SendInvitation;
