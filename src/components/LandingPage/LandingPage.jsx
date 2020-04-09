import React, { useState, useEffect, useRef } from 'react';
import CheckerBoard from '../CheckerBoard/CheckerBoard';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const [boardSize, setBoardSize] = useState(0);
  const numberInput = useRef();

  useEffect(() => {
    numberInput.current.focus();
  }, []);

  return (
    <div>
      <form >
        <input 
          type="number" 
          placeholder="Enter number here.."
          onChange={e => setBoardSize(e.target.value)}
          className={styles.numberInput}
          ref={numberInput}
        />
      </form><br/><br/>

      <CheckerBoard boardSize={boardSize} />
    </div>
  );
};

export default LandingPage;