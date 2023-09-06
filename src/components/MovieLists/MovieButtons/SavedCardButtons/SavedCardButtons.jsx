import React from "react";
import '../blocks/card-btn/card-btn.css';
import '../blocks/hidden-btn/hidden-btn.css'
import SquareButton from "../../../Common/Buttons/SquareButton/SquareButton";

function SavedCardButtons({ onBtnClick, isHovered }) {
  return (<SquareButton
    mixinClassName={`square-button_type_small-image-delete card-btn ${!isHovered && 'hidden-btn'}`}
    btnText=''
    onClick={onBtnClick}
  />);
}
export default SavedCardButtons;
