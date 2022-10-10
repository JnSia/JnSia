import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing">
      <h1>Ruin Us</h1>
      <p>당신을 망치는 것들을 적어보세요!</p>
      <Link to="/home">
        <button>Go</button>
      </Link>
    </div>
  );
}

export default Landing;
