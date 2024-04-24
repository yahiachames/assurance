// components/SignupForm.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const SignupForm = () => {
  return (
    <section className="signup">
    <h2>Get Started Today!</h2>
    <form action="#">
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" required />
      <button type="submit">Get a Quote</button>
    </form>
  </section>
  );
}

export default SignupForm;
