import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Location from '../Location';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';

const Home = () => {
  const lines = ['5% of profits are donated to land and sea environmental causes we believe in.', 'Store closed on the 17/05/24'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [lines.length]);



  return (
    <>
    <Header/>
      <SubHeader />
      <div style={{ backgroundColor: '#385f57', padding: '1rem', height: '25px', width: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px' }}>
      <h2 style={{ margin: 0, fontFamily: 'Georgia pro', fontWeight: '100', fontSize: 14, letterSpacing: '1px', fontStyle: 'normal', color: 'white', }}>{lines[currentIndex]}</h2>
    
      </div>
  
      <div style={{ flexDirection: 'row', display: 'flex', justifyContent:'center', alignItems:'center'}}>
        {/* Card 1 */}
 


  <Link to="/Cricket" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div style={{ position: 'relative', height: 610, width: 610, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginRight: 20 }}>
  {/* Image for Card 1 */}
  <img src="https://plus.unsplash.com/premium_photo-1679917506577-6c986f6faab6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNyaWNrZXQlMjBiYXR8ZW58MHx8MHx8fDA%3D" alt="Card 1" style={{ width: '100%', height: '100%',  }} />
  
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
    <h1 style={{ fontWeight: 'bold', fontFamily:'Georgia Pro', fontStyle:'normal', fontSize:35, letterSpacing:'5px' }}>CRICKET</h1>
      <button style={{ fontWeight: 'bold', color: 'white', border: '2px solid white', padding: '8px 16px', background: 'transparent', fontFamily:'Georgia Pro', fontStyle:'normal', letterSpacing:"3px" }}>SHOP</button>
        </div>

    </div>
  </Link>

  
      

  <Link to="/clothing" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div style={{ position: 'relative', height: 610, width: 610, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginRight: 10 }}>
  {/* Image for Card 2 */}
  <img src="https://media.istockphoto.com/id/1415466586/photo/at-the-vintage-second-hand-shop.jpg?s=612x612&w=0&k=20&c=ajEiSgXZRLtPgBZAbIZH_f5EgrqCmzu5_CyQ7q9woxk=" alt="Card 1" style={{ width: '100%', height: '100%' }} />
  
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
    <h1 style={{ fontWeight: 'bold', fontFamily:'Georgia Pro', fontStyle:'normal', fontSize:35, letterSpacing:'5px'}}>CLOTHING</h1>
      <button style={{ fontWeight: 'bold', color: 'white', border: '2px solid white', padding: '8px 16px', background: 'transparent', fontFamily:'Georgia Pro', fontStyle:'normal', letterSpacing:"2px"}}>SHOP</button>
        </div>

    </div>
  </Link>
      </div>
     <div style={{paddingTop:'10px',paddingBottom:'13px'}}>
     <Location/></div>

     
     <Footer />
    </>
  );
};

export default Home;
