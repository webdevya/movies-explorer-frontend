import React from "react";
import './button-base.css';

function ButtonBase({ baseClassName, mixinClassName, btnText, onClick, disabled = false, type = 'button' }) {

  return (
    <button
      className={`button-base ${baseClassName} ${mixinClassName && mixinClassName}`}
      onClick={onClick}
      disabled={disabled}
      type={type}>
      {btnText}
    </button>
  );
}
export default ButtonBase;
