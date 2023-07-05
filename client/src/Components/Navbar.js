import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the login data
    const data = {
      email: email,
      password: password,
    };

    // Make a POST request to the login endpoint
    axios
      .post('/login', data)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
        // Show a success message or redirect the user to a new page
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
        // Show an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the signup data
    const data = {
      name: name,
      email: email,
      password: password,
    };

    // Make a POST request to the signup endpoint
    axios
      .post('/signup', data)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
        // Show a success message or redirect the user to a new page
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
        // Show an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  return (
    <div>
      <h1 className="spa-title">SPA BEAUTY</h1>

      <nav className="nav1">
        <ul className="navlink-left">
          <li>
            <a className="navlink" href="/home">
              Home
            </a>
            <a className="navlink" href="/contact">
              Contact
            </a>
            <a className="navlink" href="/appointment">
              Appointment
            </a>
          </li>
        </ul>
        <div className="dropdown">
          <span className="navlink-right dropdown-trigger">
            Register
            <div className="dropdown-content">
              <a href="#signup" onClick={handleSignupClick}>
                Sign Up
              </a>
              <a href="#login" onClick={handleLoginClick}>
                Login
              </a>
            </div>
          </span>
        </div>
      </nav>

      {showLoginForm && (
        <div className="form-container">
          <h2>Login Form</h2>
          <LoginForm />
        </div>
      )}

      {showSignupForm && (
        <div className="form-container">
          <h2>Signup Form</h2>
          <SignupForm />
        </div>
      )}
    </div>
  );
}

export default Navbar;
