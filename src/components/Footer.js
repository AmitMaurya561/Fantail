import React from 'react';
import { MdMailOutline } from "react-icons/md";


const Footer = () => {


  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <div style={{ flex: '1', marginRight: '20px', padding: '25px', fontFamily:'Georgia Pro', fontWeight:'120', fontStyle:'normal', fontSize:14,  }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href="#faq">FAQ</a></li>

          <li><a href="#contact">Contact & Store Locator</a></li>

          <li><a href="#stockists">Stockists</a></li>

          <li><a href="#about">About us</a></li>
          
          <li><a href="#mission">Mission</a></li>
          
          <li><a href="#timeframes">Current TimeFrames</a></li>
          
          <li><a href="#sponsorships">Sponsorships & Ambassadors</a></li>
          
          <li><a href="#shipping">Shipping</a></li>
          
          <li><a href="#returns">Returns</a></li>
          
          <li><a href="#terms">Terms of Service</a></li>
          
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </div>
  
      <div style={{ flex: '4', fontFamily: 'Georgia Pro', fontWeight: '120', fontStyle: 'normal', fontSize: '14px', paddingTop:'20px' }}>
      <h2><b>SIGN UP</b></h2>
      <p>Receive the latest news, product releases and exclusives.</p>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative', display: 'inline-block', marginRight:'auto'}}>
          <input
            style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '2px solid', padding: '8px', fontSize: 'inherit', width: '200%' }}
            placeholder='Enter your email'
            type='text'
          />
          <MdMailOutline style={{ position: 'absolute', top: '50%', right: '-190px', transform: 'translateY(-50%)', fontSize: '20px', cursor:'pointer' }} />
        </div>
      </div>
    </div>

    
    </div>
    <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,
    height:'50px', fontFamily: 'Georgia pro', fontWeight: 200 }}>
    <select
      className="p-2"
     
      
    >
     
      <option value="option1">+91 Ind</option>
      <option value="option2">+1 USA</option>
      <option value="option3">+12 NED</option>
    </select>
  </div>
  <div>
  <img style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,
  height:'70px', marginLeft:'40%'}}
  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv7hE7mafDmN4Z_hYAxEdpe1OFEY7Dmudm7Q&s' alt=''/>
</div>
   
<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', fontFamily:'georgia pro', fontSize:14, fontWeight:200, fontStyle:'normal'}}>
   <ul>
   <li>© 2024 Fantail | All Rights Reserved</li>
  
   </ul>
</div>
   <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', fontFamily:'georgia pro', fontSize:14, fontWeight:200, fontStyle:'normal'}}>
  <ul>
  <li> <a href='#Powered'>Powered By Shopify</a></li>
  </ul>
   </div>
  </>
  )
}

export default Footer;
