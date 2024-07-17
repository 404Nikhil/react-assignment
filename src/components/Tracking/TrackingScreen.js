import React, { useState, useEffect } from 'react';
import AnalogClock from './Tracking/AnalogClock';
import Slider from './Tracking/Slider';
import ShareButton from './Tracking/ShareButton';
import { fetchQuote } from '../services/api';

function TrackingScreen() {
  const [speed, setSpeed] = useState(1);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchNewQuote = async () => {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
    };

    fetchNewQuote();
    const interval = setInterval(fetchNewQuote, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tracking-container">
      <AnalogClock speed={speed} />
      <Slider speed={speed} setSpeed={setSpeed} />
      <ShareButton speed={speed} />
      <div className="quote">{quote}</div>
    </div>
  );
}

export default TrackingScreen;