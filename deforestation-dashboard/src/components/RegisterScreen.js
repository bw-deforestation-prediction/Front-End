import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useDarkMode from "../utils/hook";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  console.log(darkMode);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>split the bill</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

const RegisterScreen = (props) => {
  const [newUserInfo, setNewUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setNewUserInfo({
      ...newUserInfo,
      [e.target.name]: e.target.value
    })
    console.log(newUserInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://build-split-the-bill.herokuapp.com/api/users/register', newUserInfo)
    
      .then(res => {
        localStorage.setItem('userId', res.data.id);
        console.log(res);
        axios.post('https://build-split-the-bill.herokuapp.com/api/users/login', {email: newUserInfo.email, password: newUserInfo.password})
          .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/dashboard');
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="register-screen">
      <div className="register-form-container">

      <h2 className="register-form-title">Deforestation Dashboard</h2>

        <form onSubmit={handleSubmit} className="register-form">

          
            <input 
            onChange={handleChange}
            name="firstname"
            placeholder="First Name"
            type="text"
            required
            />
            <input 
            onChange={handleChange}
            name="lastname"
            placeholder="Last Name"
            type="text"
            required
            />
          

         
            <input 
            onChange={handleChange}
            name="email"
            placeholder="Desired Email"
            type="email"
            required
            />
            <input 
            onChange={handleChange}
            name="password"
            placeholder="Desired Password"
            type="password"
            required
            />
         
          <button>Sign Up</button>
        </form>

        <div className="login-description">
          <p>Already have an account? Login <Link to='/'>Here</Link></p>
        </div>

        
      </div>
    </div>
  );
}
export default RegisterScreen;