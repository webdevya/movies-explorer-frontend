import React from "react";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import './techs.css';

function Techs() {
  return (
    <section className="techs" id='techs' aria-label="Технологии в проекте">
      <SectionHeader text='Технологии' isSpecial={true} />
      <h3 className="techs__subheader">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__items">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">MongoDB</li>
      </ul>
    </section>
  );
}
export default Techs;
