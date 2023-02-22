"use client";
import React, { useState } from "react";

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
    if (props.onChange) {
      props.onChange(!isChecked);
    }
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
      />
      {props.label}
    </label>
  );
}
