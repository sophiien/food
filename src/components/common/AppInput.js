import React from "react";

const AppInput = ({
  onChange,
  onKeyPress = undefined,
  placeholder = "",
  value,
  maxLength,
  type = "text",
}) => {
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      maxLength={maxLength}
    />
  );
};

export default AppInput;
