"use client";
import React, { useRef, useState } from "react";
import styles from "./upload.module.css";
import Image from "next/image";
import Edit from "public/icons/editprofile.svg";
import styles from "./upload.module.css";

const UploadImage = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  className,
  id,
  icon: Icon,
  ...props
}) => {
  const [type, setType] = useState(props.type);
  const hiddenFileInput = useRef(null);

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      var i = event.target.files[0];
      const body = new FormData();
      body.append("image", i);
    }
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  return (
    <section className={styles.editprofile}>
      <div className="">
        <input
          id={id}
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          className=""
          {...field}
          {...props}
          style={{ display: "none" }}
        />
        <div className={styles.uploadimage} onClick={handleClick}>
          <Image
            fill
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className=" rounded-lg "
          />
          <Edit className="w-12 absolute -bottom-3 -right-3" />
        </div>
      </div>
    </section>
  );
};

export default UploadImage;
