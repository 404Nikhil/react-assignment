import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { signUpWithEmail, signUpWithGoogle } from '../../services/auth';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signUpWithEmail(email, password);
      setCurrentUser(user);
      history.push('/tracking');
    } catch (error) {
      console.error('Sign up failed', error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const user = await signUpWithGoogle();
      setCurrentUser(user);
      history.push('/tracking');
    } catch (error) {
      console.error('Google sign up failed', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create your new account</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Register</button>
      </form>
      <button className="google-btn" onClick={handleGoogleSignUp}>Sign up with Google</button>
      <p>Have an account? <Link to="/login">Sign In</Link></p>
    </div>
  );
}

export default SignUp;