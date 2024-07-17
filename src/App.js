import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import TrackingScreen from './components/TrackingScreen';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/tracking" component={TrackingScreen} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;