import React from 'react';
import { Link } from "react-router-dom";
import './linked-text.css';

function LinkedText({ text, url, underlined = false }) {
  return (
    <div className={`linked-text ${underlined && 'linked-text_underlined'}`}>
      <span className="linked-text__text">{text}</span>
      <Link className="linked-text__link link" to={url} target="_blank" rel="noopener noreferrer">↗</Link>
    </div>
  );
}
export default LinkedText;
