import clsx from "clsx";
import React from "react";

const Dropdown = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  meta,
  className,
  options,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={props.id} className="text-xs" >
        {props.label}
      </label>
      <select
      onChange={onchange}
        className={clsx(
            " placeholder-secondary  bg-[#FCE9CF] border mr-0 border-[#F5D9B1] rounded-md text-base",
          {
            [className]: !!className,
          }
        )}
        {...field}
        {...props}
      >
        
        <option value="val">{props.placeholder}</option>
        {options.map((val,index)=>{
            return(
          <option key={val.cou} className="text-primary4" value={val.cou}>
          {val.cou}
        </option> ) 
        })}
        {/* {options.map((x) => (
            
          <option key={x} className="text-primary" value={x}>
            {x.text}
          </option>
        ))} */}
      </select>
      {touched[field.name] && errors[field.name] && (
        <p className="text-red-500 text-sm">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default Dropdown;
