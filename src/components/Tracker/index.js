import React from 'react';
import Icon from '../Icon'
import './style.css';

const Tracker = ({ data }) => {
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
    </div>
  );
}

Tracker.defaultProps = {
  data: []
}

export default Tracker;
