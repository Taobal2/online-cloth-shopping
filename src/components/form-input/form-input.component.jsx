import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form">
      <input className="form__input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          }formInput__label `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
