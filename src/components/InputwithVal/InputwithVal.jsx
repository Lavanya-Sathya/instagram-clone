import React from "react";
import { useState } from "react";
import "./inputwithVal.css";
function InputwithVal({ id, label, value, onChange, type = "text" }) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [showPass, setShowpass] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = (e) => {
    setFocused(false);
    setHasValue(!!e.target.value);
  };
  const handleChange = (e) => {
    setHasValue(!!e.target.value);
    onChange && onChange(e);
  };
  const handleShowClick = (e) => {
    setShowpass(!showPass);
  };
  return (
    <div className="form-group mt-2">
      <label
        style={
          focused || hasValue
            ? {
                top: "1px",
                fontSize: "10px",
                left: "5px",
                paddingBottom: "1px",
              }
            : { top: "11px", fontSize: "14px", left: "10px", color: "#807e7e" }
        }
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="form-control"
        type={type === "password" ? (showPass ? "text" : type) : type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        id={id}
        name={id}
        value={value}
      />
      {type === "password" && (
        <button className="ShowButton" onClick={(e) => handleShowClick(e)}>
          {showPass ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
}

export default InputwithVal;
