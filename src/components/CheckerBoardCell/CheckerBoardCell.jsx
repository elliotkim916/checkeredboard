import React from 'react';
import './CheckerBoardCell.css';

const CheckerBoardCell = ({ row, column }) => {
  return (
    <div 
      className="cell"
      style={{backgroundColor: (row + column) % 2 === 0 ? 'black' : 'white'}} 
    >
    </div>
  );
};

export default CheckerBoardCell;