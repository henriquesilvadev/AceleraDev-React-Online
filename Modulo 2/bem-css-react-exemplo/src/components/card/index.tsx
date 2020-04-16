import React from 'react';
import './style.css';

const Card = () => {
  return (
    <section className="card">
      <div className="card__header"></div>
      <div className="card__content">
        <ul className="card__list">
          <li className="card__item card__item--active">Adobe XD</li>
          <li className="card__item">Figma</li>
          <li className="card__item">Sketch</li>
        </ul>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          itaque unde! Repellat consectetur minus ipsam. Aut consequatur quos a
          sequi.
        </p>
        <button className="card__button">
          Visit the link
        </button>
      </div>
    </section>
  )
}

export default Card