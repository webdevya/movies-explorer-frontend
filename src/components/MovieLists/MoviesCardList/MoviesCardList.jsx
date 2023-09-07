import React from "react";
import Card from '../Card/Card';
import './card-list.css';

function MoviesCardList({ cards, onCardLike, cardButtons, errorText }) {

  const cardElements = cards !== null ?
    cards.map((card, i) => (
      <li className="card-list__item" key={card.id}>
        <Card
          card={card}
          onCardLike={onCardLike}
          cardButtons={cardButtons}
        />
      </li>
    )) : null;

  return (
    <section className="card-list" aria-label="Фильмы">
      {
        errorText && errorText.length > 0 ?
          <p className="card-list__error">{errorText}</p> :
          cards !== null && cards.length === 0 ?
            <p className="card-list__empty-result">Ничего не найдено</p> :
            <ul className="card-list__items">
              {cardElements && cardElements}
            </ul>
      }
    </section>
  );
}
export default MoviesCardList;
