import React from 'react';
import './CheckerBoardCell.css';

const CheckerBoardCell = ({ index }) => {
  return (
    <div 
      className="cell"
      style={{backgroundColor: index % 2 === 0 ? 'black' : 'white'}} 
    >
    </div>
  );
};

export default CheckerBoardCell;