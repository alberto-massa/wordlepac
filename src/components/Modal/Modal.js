import React from 'react';
import './Modal.css';

const Modal = ({ isCorrect, solution }) => {
  return (
    <div className="wordle-modal">
      <div className="modal-header">
        <p>{isCorrect ? 'You Won!' : 'You Lost!'}</p>
      </div>
      <div>
        <p className="mt-3">The answer was:</p>
        <span className="modal-answer">{solution}</span>
        <div className="my-4">
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
