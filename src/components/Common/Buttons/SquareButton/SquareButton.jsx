import React from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import './square-button.css';
function TransparentButton({ mixinClassName, btnText, onClick }) {

  return (
    <ButtonBase
      baseClassName='square-button'
      mixinClassName={mixinClassName}
      btnText={btnText}
      onClick={onClick}
    />
  );
}
export default TransparentButton;
