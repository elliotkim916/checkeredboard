import React from 'react';
import styles from './CheckerBoardCell.module.css';

const CheckerBoardCell = ({ row, column }) => {
  return (
    <div 
      className={styles.cell}
      style={{backgroundColor: (row + column) % 2 === 0 ? 'black' : 'white'}} 
    >
    </div>
  );
};

export default CheckerBoardCell;