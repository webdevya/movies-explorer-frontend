import React from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import './transparent-button.css';
function TransparentButton({ mixinClassName, btnText, onClick }) {

  return (
    <ButtonBase
      baseClassName='transparent-button transparent-button-base'
      mixinClassName={mixinClassName}
      btnText={btnText}
      onClick={onClick}
    />
  );
}
export default TransparentButton;
