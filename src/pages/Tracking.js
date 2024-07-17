import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import AnticlockwiseClock from '../components/AnticlockwiseClock';
import SpeedSlider from '../components/SpeedSlider';
import ShareButton from '../components/ShareButton';

const Tracking = () => {
  const [speed, setSpeed] = useState(1);
  const [quote, setQuote] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const speedParam = searchParams.get('speed');
    if (speedParam) {
      setSpeed(parseInt(speedParam));
    }
  }, [location]);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuote(data.content);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <h1>Tracking Screen</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        <AnticlockwiseClock speed={speed * 1000} />
        <SpeedSlider speed={speed} setSpeed={setSpeed} />
        <ShareButton speed={speed} />
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>Random Quote:</h2>
        <p>{quote}</p>
      </div>
    </Layout>
  );
};

export default Tracking;