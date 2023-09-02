import React from "react";
import Card from '../Card/Card';
import './card-list.css';

function MoviesCardList({ cards, onCardLike }) {

  const cardElements = cards.map((card, i) => (
    <li className="card-list__item" key={card.id}>
      <Card
        card={card}
        onCardLike={onCardLike}
      />
    </li>
  ));

  return (
    <section className="card-list" aria-label="Фильмы">
      <ul className="card-list__items">
        {cardElements}
      </ul>
    </section>
  );
}
export default MoviesCardList;
