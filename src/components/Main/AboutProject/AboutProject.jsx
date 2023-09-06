import React from "react";
import HeaderedText from "../../Common/HeaderedText/HeaderedText";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import './about-project.css';

function AboutProject() {
  return (
    <section className="about-project" id='about-project' aria-label="О проекте">
      <SectionHeader text='О проекте' />
      <ul className="about-project__items">
        <li className="about-project__item">
          <HeaderedText
            header='Дипломный проект включал 5 этапов'
            text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'
          />
        </li>
        <li className="about-project__item">
          <HeaderedText
            header='На выполнение диплома ушло 5 недель'
            text='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
          />
        </li>
      </ul>

      <div className="about-project__time-line">
        <span className="about-project__time-line-item about-project__time-line-item_step_1">1 неделя</span>
        <span className="about-project__time-line-item-desc about-project__time-line-item-desc_step_1">Back-end</span>
        <span className="about-project__time-line-item about-project__time-line-item_step_2">4 недели</span>
        <span className="about-project__time-line-item-desc about-project__time-line-item-desc_step_2">Front-end</span>
      </div>
    </section>
  );
}
export default AboutProject;
