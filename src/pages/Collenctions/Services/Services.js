import React, { useState, useEffect, useRef } from 'react';
import Footer from '../../../components/Footer';
import SubHeader from '../../../components/SubHeader';
import Header from '../../../components/Header';

const Services = () => {
  const lines = ['5% of profits are donated to land and sea environmental causes we believe in.', 'Store closed on the 17/05/24'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [lines.length]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const servicesBatItems = [
    { 
      image: "https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=612x612&w=0&k=20&c=bWtWaG6HUDJQ1yACtWY_FRgtH1rz5HMrPD4hrgr3aGI=",
      price: "$100",
      description: "Hanle Replacement"
    },
    {
      image: "https://media.istockphoto.com/id/1479014362/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=86vxGB0cMkEh05v5NGn3XCAjEuR_QXTm9f_V09jOBQQ=",
      price: "$120",
      description: "FULL REFURBISHMENT"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo2N3Ic9EyEsH6sIIv3mmr85EcNPbKbrT9oQ&s",
      price: "$60",
      description: "Crack Repair"
    },
    {
      image: "https://media.istockphoto.com/id/694515450/photo/cricket-bat-and-ball.jpg?s=612x612&w=0&k=20&c=FWg02lkNNzK4tpVjR_ST8G6EDoaJlGfTSp6_igPEF74=",
      price: "$65",
      description: "Handle Re-Bind"
    },
    {
      image: "https://media.istockphoto.com/id/157419637/photo/pale-wood-cricket-bat-on-white-background.jpg?s=612x612&w=0&k=20&c=zZ9lpx7z3peRYwsHxO178pyXRsvgWnX4ys-58pT2xZc=",
      price: "$55",
      description: "Toe Guard"
    },
    {
      image: "https://media.istockphoto.com/id/1479014056/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=KMZyUgkx-MnPOpydZxrgp2aytxV3xp3Yj-2BENai8oU=",
      price: "$70",
      description: "Handle Tube"
    },
    {
      image: "https://media.istockphoto.com/id/1479013897/photo/modern-generic-brand-cricket-bat.jpg?s=612x612&w=0&k=20&c=ykrAFREwtBcJuAebmiBKeOEtiDalLt4sz6N85hyj7ME=",
      price: "$65",
      description: "Weight Reduction"
    },
    {
      image: "https://media.istockphoto.com/id/691337632/photo/office-equipment.jpg?s=612x612&w=0&k=20&c=Z2Wsjvkj33rOY6qj5Vto9l8lodMbLotyZrvsKBCablE=",
      price: "$75",
      description: "Knocking Bat"
    },
   
  ]

  return (
    <>
      <Header />
      <SubHeader />
      <div style={{ backgroundColor: '#385f57', padding: '1rem', height: '25px', width: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px', zIndex: 1 }}>
        <h2 style={{ margin: 0, fontFamily: 'Georgia pro', fontWeight: '100', fontSize: 14, letterSpacing: '1px', fontStyle: 'normal', color: 'white' }}>{lines[currentIndex]}</h2>
      </div>
      <div style={{ position: 'relative', margin: '0 auto', padding: '20px', maxWidth: '95vw', textAlign: 'left', fontFamily: 'georgia pro', fontSize: '14px', zIndex: 2 }}>
        <h2 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: '20px', letterSpacing: '4px', marginBottom: '20px' }}>CRICKET BAT SERVICES & REPAIR</h2>
        <br />
        <p>We are your one-stop for all your cricket bat needs, from preparation to refurbishments & handle replacements. Our work is known for its quality, which is why we are used & trusted by numerous first-class & international cricketers.</p>
        <br />
        <p>If you would like Fantail to repair your bat but are unsure if it is repairable or you're unsure what to purchase, please use the support box at the bottom left-hand side of your screen and include a few pictures of your bat/s.</p>
        <br />
        <p>PLEASE NOTE: We offer a crack repair service, not a crack prevention service. We don't provide any warranty on our crack repairs as we can't control what the willow will do, but we do our best to ensure they hold for as long as possible. Crack repairs are a temporary solution. We'd recommend purchasing a new bat if you want a permanent solution. If you need further details, please get in touch with us before placing an order.</p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: '15px', marginTop: '30px', marginBottom: '10px' }}>CURRENT TIMEFRAMES</h3>

        <p>We can have 60+ open orders at any given time, and as we work on a first-come, first-served basis, it's not possible to provide you with a time or day. We can, however, provide you with our current timelines </p>
        <br />
        <p>If you are concerned that your order has been completed but haven't been notified, click the order status button in your email receipt or email us.</p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: '15px', marginTop: '30px', marginBottom: '10px' }}>PLEASE FOLLOW THESE STEPS:</h3>

        <ol>
          <li>1. Place your order online or pop in-store for the required services and repairs (please get in touch if you need any assistance). If you are based outside of NZ, please get a shipping quote before placing your order. Please don't send your bat/s in unless you've placed an order.</li>
          <li>2. Send your bat into our workshop from anywhere around the world (Fantail doesn't organise or pay for this) with your order number and name attached. This is vital to connect your bat/s with your order. Please don't send your bat cover; it may not be returned.</li>
          <li>3. Your bat will join the queue as soon as it arrives. You won't be notified when your bat arrives.</li>
          <li>4. Once complete, your bat/s will be couriered to the address given in your order details (the return shipping is calculated and paid for in the checkout of our website). Upon dispatch, you will be sent an email with the tracking details, or we will let you know it is ready for pickup.</li>
        </ol>

        <p>PLEASE NOTE: If you are an international customer, please get a quote to send your bat/s to NZ before placing an order if you place an order and change your mind. You'll only receive a refund of the order value minus the transaction fee (between 3 & 7% of the order value).</p>
        <br />
        <p>Send or drop your bat/s off to the following address:</p>

        <br />
        <p>Fantail<br />
          84C Elizabeth Knox Place<br />
          St Johns, Auckland 1072<br />
          New Zealand</p>

        <div style={{ position: 'relative', display: 'inline-block', cursor: 'pointer', marginTop: '60px' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <span
              style={{
                position: 'relative',
                borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                paddingBottom: '2px' 
              }}
              onMouseOver={(e) => { e.target.nextSibling.style.width = e.target.offsetWidth + 'px' }}
              onMouseOut={(e) => { e.target.nextSibling.style.width = '0' }}
            >
              VIEW STORE OPENING HOURS
            </span>
            <span
              style={{
                position: 'absolute',
                bottom: '-2px',
                left: '0',
                backgroundColor: '#000',
                height: '2px',
                width: '0',
                transition: 'width 0.3s ease'
              }}
            ></span>
          </div>
        </div>


        <div ref={sidebarRef}>
          <button onClick={toggleSidebar} style={buttonStyle}>Filter</button>
          <div style={{ ...sidebarStyle, display: isOpen ? 'block' : 'none', left: isOpen ? '0' : '-250px' }}>
            <h2 style={headerStyle}>Filter</h2>
            <div style={paramContainerStyle}>
              <p style={paramLabelStyle}>Product type:</p>
              <select style={selectStyle}>
                <option value="type1">OPTIONS HIDDEN</option>
                <option value="type2">Services</option>
               
              </select>
            </div>
            <div style={paramContainerStyle}>
              <p style={paramLabelStyle}>Type:</p>
              <select style={selectStyle}>
                <option value="typeA">Apply Clear Facing</option>
                <option value="typeB">Apply fibre Facing</option>
                
              </select>
            </div>
            <div style={paramContainerStyle}>
              <p style={paramLabelStyle}>Availability:</p>
              <select style={selectStyle}>
                <option value="available">In stock</option>
               
              </select>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px', margin: '10px 0',  }}>
        {servicesBatItems.map((item, index) => (
            <div key={index} style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', background: 'white' }}>
                <div style={{ height: '70%', padding: '10px' }}>
                    <img src={item.image} alt={`Item ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'white', cursor: 'pointer' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '30%', padding: '10px', color: 'black', cursor:'pointer', transition: 'background-color 0.3s', backgroundColor: 'white' }} 
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'lightgray' }} 
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white' }}>
                    <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '0' }}>{item.price}</p>
                    <p style={{ fontSize: '14px', margin: '5px 0' }}>{item.description}</p>
                </div>
            </div>
       ))}
      </div>


      </div>
      <div className="border-b border-gray-300 w-full mt-1"></div>

      <Footer />
    </>
  )
}

const buttonStyle = {
  backgroundColor: 'white',
  border: '1px solid',
  color: 'black',
  padding: '12px 25px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '14px',
  margin: '4px 2px',
  cursor: 'pointer',
};

const sidebarStyle = {
  width: '300px',
  backgroundColor: '#f1f1f1',
  position: 'fixed',
  top: '0',
  left: '-250px', // initially hidden
  height: '100%',
  overflowX: 'hidden',
  paddingTop: '20px',
  transition: 'left 0.3s ease' // add transition for smooth animation
};

const headerStyle = {
  marginLeft: '20px',
  marginBottom: '20px',
};

const paramContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 20px',
};

const paramLabelStyle = {
  marginRight: '10px',
  fontWeight: 'bold',
};

const selectStyle = {
  padding: '10px',
};

export default Services;
