import React from 'react';
import './style.css';

const Card = ({ title, farm, percentage, }) => {
  return (
    <div className="Card">
      {title}
      <div className="Card-info">
        <p><span>Farm:</span>{farm}</p>
        <p><span>Text1:</span>{farm}</p>
        <p><span>Text2:</span>{farm}</p>
      </div>
      <div>
        {percentage}
      </div>
    </div>
  );
}

export default Card;
