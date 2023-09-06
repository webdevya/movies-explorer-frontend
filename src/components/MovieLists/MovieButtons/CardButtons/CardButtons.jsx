import React from "react";
import '../blocks/card-btn/card-btn.css';
import '../blocks/hidden-btn/hidden-btn.css'
import SquareButton from "../../../Common/Buttons/SquareButton/SquareButton";
import RoundedButton from "../../../Common/Buttons/RoundedButton/RoundedButton";

function CardButtons({ card, onBtnClick, isHovered }) {

  const button =
    (card.isLiked ?
      <SquareButton
        mixinClassName="square-button_type_small-image-accept card-btn"
        btnText=''
        onClick={onBtnClick}
      /> :
      <RoundedButton
        mixinClassName={`rounded-button_size_small card-btn ${!isHovered && 'hidden-btn'}`}
        btnText="Сохранить"
        onClick={onBtnClick}
      />);

  return (button);
}
export default CardButtons;
