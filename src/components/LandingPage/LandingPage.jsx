import React, { useState } from 'react';
import CheckerBoard from '../CheckerBoard/CheckerBoard';

const LandingPage = () => {
  const [boardSize, setBoardSize] = useState(0);

  return (
    <div>
      <form >
        <input 
          type="number" 
          placeholder="Enter number here.."
          onChange={e => setBoardSize(e.target.value)}
        />
      </form><br/><br/>

      <CheckerBoard boardSize={boardSize} />
    </div>
  );
};

export default LandingPage;