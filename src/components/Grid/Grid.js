import React from 'react';
import Row from '../Row/Row';
import './Grid.css';

const Grid = ({ currentGuess, guesses, turn }) => {
  return (
    <>
      <div>
        {guesses.map((guess, i) => {
          if (turn === i) {
            return <Row key={i} currentGuess={currentGuess} />;
          }
          return <Row key={i} guess={guess} />;
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Type and press Enter"
          value={currentGuess}
          onChange={(e) => {
            e.preventDefault();
          }}
        />
      </form>
    </>
  );
};

export default Grid;
