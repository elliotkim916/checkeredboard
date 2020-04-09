import React from 'react';
import CheckerBoardCell from '../CheckerBoardCell/CheckerBoardCell';
import './CheckerBoard.css';

const CheckerBoard = ({ boardSize }) => {
  if (boardSize) {
    const checkerBoard = [];

    for (let row = 0; row < parseInt(boardSize); row++) {
      const checkerBoardRow = [];
      for (let column = 0; column < parseInt(boardSize); column++) {
        checkerBoardRow.push(<CheckerBoardCell column={column} row={row} key={column}/>)
      }
      checkerBoard.push(checkerBoardRow);
    }

    return (
      <div 
        className="container" 
        style={{ width: boardSize * 102, height: boardSize * 102 }}
      >
        {checkerBoard}
      </div>
    );
  } else {
    return null;
  }
};

export default CheckerBoard;