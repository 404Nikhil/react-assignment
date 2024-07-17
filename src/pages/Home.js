import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <img
        src="https://source.unsplash.com/random/1200x800/?burger"
        alt="Food background"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 152, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1>We serve incomparable delicacies</h1>
        <p>All the best restaurants with their top menu waiting for you, they can't wait for your order!!</p>
        <div style={{ marginTop: '20px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%', margin: '0 5px' }}></span>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%', margin: '0 5px' }}></span>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%', margin: '0 5px' }}></span>
        </div>
      </div>
    </div>
  );
};

export default Home;