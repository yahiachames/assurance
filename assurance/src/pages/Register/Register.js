import React, { useState , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Register.css";
import { signupApi } from '../../controllers/ApiUser';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username : "",
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'user', // Set default value for role,
      firstName: "",
  lastName: ""
  });
  const [signUpStatus, setSignUpStatus] = useState(false)
  const [errorSignUp,setErrorSignUp] = useState(null)

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  const { email, username, password, phone, role , firstName , lastName} = formData; // Destructure username from formData
  signupApi(username, password, phone, email, role , firstName , lastName).then(res => {
    if (res.ok) {
      setSignUpStatus(true)
    } else {
      console.log(res.data.msg)
      setErrorSignUp(res.data.msg)
    }
  }); // Pass username to the signup action
};

  useEffect(() => {
    if (signUpStatus) {
      navigate('/login');
    }
  }, [signUpStatus]);

  return (
    <div className='container-big-signup'>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
  type="text"
  name="firstName"
  placeholder="First Name"
  value={formData.firstName}
  onChange={handleChange}
/>
<input
  type="text"
  name="lastName"
  placeholder="Last Name"
  value={formData.lastName}
  onChange={handleChange}
/>
          <input
  type="text"
  name="username"
  placeholder="Username"
  value={formData.username}
  onChange={handleChange}
  required
/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            disabled // Make it disabled so that it cannot be edited
          />
          <button type="submit">Sign Up</button>
        </form>
        {errorSignUp && <p className="error-message">{errorSignUp}</p>}
      </div>
    </div>
  );
};

export default SignupPage;
