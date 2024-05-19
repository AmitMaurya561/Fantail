import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [ setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setIsValidEmail(false);
      return;
    }
    setLoggedIn(true);
    alert('You have logged in successfully!');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f4f4f4',}}>
      <div style={{ height: '400px', width: '450px', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', background: '#fff', textAlign: 'center', position: 'relative' ,   }}>
       <Link to='/'>
       <img 
       style={{ height: '50px', width: '100px', margin: '10px auto', display: 'block', cursor: 'pointer', background:'white' }}
       src='https://cdn.shopify.com/s/files/1/0986/8642/files/sentingo_logo_200x60@2x.jpg?v=1688097111.webp' 
       alt=''
     />
       </Link>
        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
       
        <div style={{ display: 'flex', flexDirection: 'column',  alignItems: 'flex-start' }}>
          <div style={{ marginLeft: '10px' }}>
            <label>Log In</label>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <label htmlFor="email">Enter your email and we'll send you a login code</label>
          </div>
        </div>
 
          <input
            type="email"
            id="email"
            placeholder="Email"
            style={{ height: '35px', width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '4px', border: `1px solid ${isValidEmail ? '#ccc' : 'red'}`, fontSize: '1rem', boxSizing: 'border-box' }}
            value={email}
            onChange={handleChange}
          />
          {!isValidEmail && (
            <p style={{ color: 'red', fontSize: '0.8rem', margin: '0.5rem 0' }}>Please enter a valid email address</p>
          )}
          <button type="submit" style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', background: 'rgb(24, 121, 185)', color: '#fff', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>Continue</button>
        </form>
        <p style={{ position: 'absolute', bottom: '2', left: '0', fontSize: '0.8rem', color: 'rgb(24, 121, 185)', paddingLeft: '1rem', paddingTop:'5rem' }}>
          <a href="https://fantailcricket.com/9868642/policies/8247941.html?locale=en" style={{ color: 'rgb(24, 121, 185)', textDecoration: 'underline' }}>Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

