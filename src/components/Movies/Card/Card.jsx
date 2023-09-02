import React from "react";
import './card.css';
import SquareButton from "../../Common/Buttons/SquareButton/SquareButton";
import RoundedButton from "../../Common/Buttons/RoundedButton/RoundedButton";

function Card({ card, onCardLike }) {

  //const cardLikeButtonClassName = `card__btn ${card.isLiked ? 'card__btn_type_unsave' : 'card__btn_type_save'}`

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <figure className="card">
      {card.isLiked ?
        <SquareButton
          mixinClassName="square-button_type_small-image-accept card-btn"
          btnText=''
          onClick={handleLikeClick}
        /> :
        <RoundedButton
          mixinClassName="rounded-button_size_small card-btn"
          btnText="Сохранить"
          onClick={handleLikeClick}
        />}
      {/* <button type="button" className={cardLikeButtonClassName}
        onClick={handleLikeClick}></button> */}
      <img className="card__image" src={card.image.url} alt={card.nameRU} />
      <figcaption className="card__caption">
        <h2 className="card__caption-text">{card.nameRU}</h2>
        <p className="card__duration">{card.duration}</p>
      </figcaption>
    </figure>
  );
}
export default Card;
