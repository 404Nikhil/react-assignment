import React from 'react';

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={speed}
        onChange={(e) => setSpeed(parseInt(e.target.value))}
      />
      <p>Speed: {speed}x</p>
    </div>
  );
};

export default SpeedSlider;