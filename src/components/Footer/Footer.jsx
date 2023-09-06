import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line">
        <p className="footer__year">© 2023</p>
        <ul className="footer__links">
          <li>
            <Link className="footer__link link" to="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</Link>
          </li>
          <li>
            <Link className="footer__link link" to="https://github.com/" target="_blank" rel="noopener noreferrer">Github</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
