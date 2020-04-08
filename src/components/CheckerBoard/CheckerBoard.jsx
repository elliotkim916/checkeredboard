import React from 'react';
import CheckerBoardCell from '../CheckerBoardCell/CheckerBoardCell';
import './CheckerBoard.css';

const CheckerBoard = ({ boardSize }) => {
  if (boardSize) {
    const checkerBoard = [];

    for (let i = 0; i < Math.pow(parseInt(boardSize), 2); i++) {
      checkerBoard.push(<CheckerBoardCell />);
    }

    return (
      <div 
        className="container" 
        style={{width: boardSize * 102, height: boardSize * 102}}
      >
        {checkerBoard}
      </div>
    );
  } else {
    return null;
  }
};

export default CheckerBoard;