import React from "react";

//...rest will pass in the other props not defined
const FormInput = ({ name, label, onChange, value, ...rest }) => {
  return (
    <div className="form-group" style={{ marginTop: "20px" }}>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        id={name}
        type="text"
        className="form-control"
        name={name}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
