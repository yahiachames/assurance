import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="login-container_Login">
      <h2>Login</h2>
      <form className="login-form_Login" onSubmit={handleLogin}>
        <div className="form-group_Login">
          <label htmlFor="email">Email:</label>
          <input
            className="input-field_Login"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button className="button_Login" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
