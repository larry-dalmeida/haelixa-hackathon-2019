import React from 'react';
import './style.css';

const Card = ({ name, value }) => {
  return (
    <div className="Card">
      <div className="Card-info">
        <p><span>Farm:</span>{name}</p>
        <p><span>Text1:</span>{''}</p>
        <p><span>Text2:</span>{''}</p>
      </div>
      <div className="Card-value">
        {value}
      </div>
    </div>
  );
}

export default Card;
