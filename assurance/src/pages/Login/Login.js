import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../redux/actions/auth-actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isLoading, error, isLoggedIn } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
    dispatch(login(username, password));
  };

  return (
    <div className="login-container_Login">
      <h2>Login</h2>
      <form className="login-form_Login" onSubmit={handleLogin}>
        <div className="form-group_Login">
          <label htmlFor="username">Username:</label>
          <input
            className="input-field_Login"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group_Login">
          <label htmlFor="password">Password:</label>
          <input
            className="input-field_Login"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="button_Login" type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
      {error && <p className="error-message_Login">{error}</p>}
      {isLoggedIn && <p className="success-message_Login">Login successful!</p>}
    </div>
  );
};

export default Login;
