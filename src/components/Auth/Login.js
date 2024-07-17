import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { loginWithEmail, loginWithGoogle } from '../../services/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginWithEmail(email, password);
      setCurrentUser(user);
      history.push('/tracking');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      setCurrentUser(user);
      history.push('/tracking');
    } catch (error) {
      console.error('Google login failed', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to your account.</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Sign In</button>
      </form>
      <button className="google-btn" onClick={handleGoogleLogin}>Sign in with Google</button>
      <p>Don't have an account? <Link to="/signup">Register</Link></p>
    </div>
  );
}

export default Login;