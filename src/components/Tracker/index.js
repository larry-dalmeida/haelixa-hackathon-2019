import React from 'react';
import Icon from '../Icon'
import FacilityCard from '../FacilityCard'
import './style.css';

const Tracker = ({ data, onItemClick }) => {
  return (
    <div className="Tracker">
      {
        /*data.map(it => {
          return (
            <div>
            </div>
          )
        })*/
      }
      <Icon icon={'dna'} />
      <div className={'Tracker-container'}>
        <FacilityCard name={'Farm'} status={'successfull'} onClick={onItemClick} />
        <FacilityCard name={'Dying Facility'} status={'fail'} onClick={onItemClick} />
        <FacilityCard name={'Sewing Facility'} onClick={onItemClick} />
        <FacilityCard name={'Retail'} status={'successfull'} onClick={onItemClick} />
      </div>
    </div>
  );
}

Tracker.defaultProps = {
  data: []
}

export default Tracker;
