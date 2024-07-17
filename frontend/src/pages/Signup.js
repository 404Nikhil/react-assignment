import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Layout from '../components/Layout';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/tracking');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGoogleSignup = (credentialResponse) => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <Layout>
      <h1>Create your new account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="btn">Register</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <GoogleLogin
          onSuccess={handleGoogleSignup}
          onError={() => console.log('Signup Failed')}
        />
      </div>
      <p>Already have an account? <Link to="/login">Sign In</Link></p>
    </Layout>
  );
};

export default Signup;
