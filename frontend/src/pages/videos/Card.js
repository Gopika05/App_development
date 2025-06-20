import React from 'react';
import './Card.css';

const Card = ({ image, title, description, link, buttonText }) => {
  return (
    <div className="cardsii">
      <div className="card-cont">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">
          {buttonText}
        </a>
      </div>
      <img src={image} alt={title} className="cardsii-image" />
    </div>
  );
};

export default Card;
