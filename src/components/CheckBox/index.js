import React from "react";

const Checkbox = ({
  field: { name, value },
  form: { touched, errors, setFieldValue, setFieldTouched },
  options,
  label,
}) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      {options.map((x) => (
        <div key={x.id}>
          <input
            type="radio"
            name={name}
            id={x.id}
            checked={value === x.id}
            onChange={() => {
              setFieldValue(name, x.id);
              setFieldTouched(name, true);
            }}
          />
          <label htmlFor={x.id}>{x.text}</label>
        </div>
      ))}
      {touched && errors && !!touched[name] && !!errors[name] && (
        <p className="text-sm text-error font-semibold">{errors[name]}</p>
      )}
    </fieldset>
  );
};

export default Checkbox;
