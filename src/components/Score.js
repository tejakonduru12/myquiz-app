// src/components/Score.js
import React from 'react';

const Score = ({ score, total }) => {
  return (
    <div className="score">
      <h2>
        Score: {score} / {total}
      </h2>
    </div>
  );
};

export default Score;