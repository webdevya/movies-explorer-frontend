import React from "react";
import './button-base.css';

function ButtonBase({ baseClassName, mixinClassName, btnText, onClick }) {

  return (
    <button
      className={`button-base ${baseClassName} ${mixinClassName && mixinClassName}`}
      onClick={onClick}>
      {btnText}
    </button>
  );
}
export default ButtonBase;
