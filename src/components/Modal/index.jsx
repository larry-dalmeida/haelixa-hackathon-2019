import React from 'react';
import './style.css';

const Modal = ({ name, status }) => {
  return (
    <div className="Modal-background">
      <div className="Modal">
        {name}
      </div>
    </div>
  );
}

export default Modal;
