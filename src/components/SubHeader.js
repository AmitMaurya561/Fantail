import React, { useState } from 'react';
import { BiCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import Login from '../pages/AccountLogin/Login';
import { Link } from 'react-router-dom';

const SubHeader = () => {

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
     paddingBottom:'50px', paddingTop:'10px', position:'sticky', top:0, backgroundColor: 'white', zIndex:800}}>
    
      <div style={{ display: 'flex', alignItems: 'center', marginLeft:'3rem', marginTop:'20px' }}>
        <CiSearch style={{ fontSize: '1.875rem', color: '#4b5563' }} />
      </div>
  
   
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginLeft: '1.5rem', marginRight: '1.5rem', marginTop:'20px' }}>
      <h2 style={{ margin: 'auto 10px', fontFamily:'georgia pro', fontWeight:'bold', fontStyle:'normal', wordSpacing: '10', letterSpacing:'3px' }}>CRICKET</h2>
     <Link to='/'>
      <img src="https://fantailcricket.com/cdn/shop/files/website_0bf81e64-adfc-4867-9fed-7477be4af152.png?v=1635724445&amp" alt="Classic" style={{ margin: 'auto 10px', width: '100px', height: '50px', 
        cursor:'pointer'
      }} />
      </Link>
      <h2 style={{ margin: 'auto 10px', fontFamily:'georgia pro', fontWeight:'bold', fontStyle:'normal', wordSpacing: '10', letterSpacing:'3px' }}>CLOTHING</h2>
    </div>
    
    
  
     
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '3rem', marginTop:'20px' }}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleLoginClick}>
      <Link to='/login'>
      <VscAccount style={{ fontSize: '1.875rem', color: '#4b5563', marginRight: '0.5rem' }} />
      </Link>
    </button>
        <BiCart style={{ fontSize: '1.875rem', color: '#4b5563' }} />
      </div>
    </div>
  
    {showLogin && <Login onClose={handleCloseLogin} />}
  
  </>
  
  

  
  )
}

export default SubHeader;
