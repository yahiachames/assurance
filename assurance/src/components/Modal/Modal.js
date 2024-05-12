import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, toggleModal, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={toggleModal}>&times;</span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
