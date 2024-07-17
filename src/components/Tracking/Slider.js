import React from 'react';

function Slider({ speed, setSpeed }) {
  return (
    <div className="slider-container">
      <input 
        type="range" 
        min="1" 
        max="10" 
        value={speed} 
        onChange={(e) => setSpeed(Number(e.target.value))} 
      />
      <span>Speed: {speed}x</span>
    </div>
  );
}

export default Slider;