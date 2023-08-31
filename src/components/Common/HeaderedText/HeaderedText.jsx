import React from 'react';
import './headered-text.css';

function HeaderedText({ header, text }) {
  return (
    <article className="headered-text">
      <h3 className="headered-text__header">{header}</h3>
      <p className="headered-text__text">{text}</p>
    </article>
  );
}
export default HeaderedText;
