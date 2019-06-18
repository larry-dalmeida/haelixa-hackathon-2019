import React from 'react';
import Icon from '../Icon'
import FacilityCard from '../FacilityCard'
import './style.css';

const Tracker = ({ item, onItemClick }) => {
  const getStatus = (value) => value === "1" ? 'successfull' : (value === "0" ? 'fail' : null)
  return (
    <div className="Tracker">
      <div className={'Tracker-container'}>
        <FacilityCard name={'Farm'} status={getStatus(item.farm_test)} onClick={onItemClick} />
        <FacilityCard name={'Dying Facility'} status={getStatus(item.facility_1_test)} onClick={onItemClick} />
        <FacilityCard name={'Sewing Facility'} status={getStatus(item.facility_2_test)} onClick={onItemClick} />
        <FacilityCard name={'Retail'} status={getStatus(item.facility_3_test)} onClick={onItemClick} />
      </div>
    </div>
  );
}

export default Tracker;
