import React from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import './square-button.css';
function SquareButton({ mixinClassName, btnText, onClick, disabled, type }) {

  return (
    <ButtonBase
      baseClassName='square-button'
      mixinClassName={mixinClassName}
      btnText={btnText}
      onClick={onClick}
      disabled={disabled}
      type={type}
    />
  );
}
export default SquareButton;
