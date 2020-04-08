import React from 'react';
import CheckerBoardCell from '../CheckerBoardCell/CheckerBoardCell';
import './CheckerBoard.css';

const CheckerBoard = ({ boardSize }) => {
  let cell = <CheckerBoardCell />;

  if (boardSize) {
    return (
      <div className="container">
        {cell}
      </div>
    );
  } else {
    return null;
  }
};

export default CheckerBoard;