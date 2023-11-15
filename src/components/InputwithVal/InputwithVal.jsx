import React from "react";
import { useState } from "react";
import "./inputwithVal.css";
function InputwithVal({ id, label, type = "text" }) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = (e) => {
    setFocused(false);
    setHasValue(!!e.target.value);
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
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setHasValue(!!e.target.value)}
        id={id}
        name={id}
      />
    </div>
  );
}

export default InputwithVal;
