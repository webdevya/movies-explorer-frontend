import React from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import './rounded-button.css';
function RoundedButton({ mixinClassName, btnText, onClick }) {

  return (
    <ButtonBase
      baseClassName='rounded-button'
      mixinClassName={mixinClassName}
      btnText={btnText}
      onClick={onClick}
    />
  );
}
export default RoundedButton;
