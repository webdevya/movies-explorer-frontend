import React from 'react';
import NavTab from '../NavTab/NavTab';
import './promo.css';

function Promo() {
  return (
    <section className="promo" aria-label="Стартовое описание проекта">
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab />
    </section>
  );
}
export default Promo;
