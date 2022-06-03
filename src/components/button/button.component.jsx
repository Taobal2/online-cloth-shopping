import React from "react";
import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google__signIn",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div>
      <button
        className={`btn ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
