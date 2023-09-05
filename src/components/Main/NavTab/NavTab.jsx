import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './navtab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <HashLink smooth className="nav-link link" to="#about-project">О проекте</HashLink>
      <HashLink smooth className="nav-link link" to="#techs">Технологии</HashLink>
      <HashLink smooth className="nav-link link" to="#about-me">Сутдент</HashLink>
    </nav>
  );
}
export default NavTab;
