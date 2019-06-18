import React from 'react';
import './style.css';
import image from './mockup.PNG'

const Modal = ({ onClose }) => {
  return (
    <div className="Modal-background" onClick={onClose}>
      <div className="Modal">
        <img src={image} />
      </div>
    </div>
  );
}

export default Modal;
