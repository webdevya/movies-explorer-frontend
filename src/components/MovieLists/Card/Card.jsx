import React, { useState } from "react";
import './card.css';
import { Link } from "react-router-dom";

function Card({ card, onCardLike, cardButtons }) {

  const [isHovered, setIsHovered] = useState(false);

  function handleLikeClick() {
    onCardLike(card);
  }

  const buttons = cardButtons({ card: card, onBtnClick: handleLikeClick, isHovered: isHovered });
  const img = <img className="card__image" src={card.image.url} alt={card.nameRU}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} />;
  React.useEffect(() => { }, [isHovered]);

  return (
    <figure className="card">
      {buttons}
      {card.trailerLink && card.trailerLink.length > 0 ?
        <Link className="card__link link" to={card.trailerLink} target="_blank" rel="noopener noreferrer">
          {img}
        </Link> :
        { img }
      }
      <figcaption className="card__caption">
        <h2 className="card__caption-text">{card.nameRU}</h2>
        <p className="card__duration">{card.duration}</p>
      </figcaption>
    </figure>
  );
}
export default Card;
