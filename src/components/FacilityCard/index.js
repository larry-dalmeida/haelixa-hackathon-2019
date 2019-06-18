import React from 'react';
import './style.css';

const FacilityCard = ({ name, status, onClick }) => {
  return (
    <div className={`FacilityCard ${status}`}>
      <div className="FacilityCard-placeholder" />
      <div className="FacilityCard-title">
        {name}
      </div>
      <button className="FacilityCard-button" onClick={onClick}>More Info</button>
    </div>
  );
}

export default FacilityCard;
