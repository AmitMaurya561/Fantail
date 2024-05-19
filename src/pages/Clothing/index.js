import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';

const Clothing = () => {

  const lines = ['5% of profits are donated to land and sea environmental causes we believe in.', 'Store closed on the 17/05/24'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [lines.length]);
  
  const clothItems = [
    {
      src: "https://media.istockphoto.com/id/508386622/photo/exercise-is-number-one-on-my-to-do-list.webp?b=1&s=170667a&w=0&k=20&c=tgwgKw66dF_w_kp0jvqlzjrfaxwnXhyKUC96X6G4mo4=",
      description: "Workout Motivation T-Shirt",
      price: "$24.99"
    },
    {
      src: "https://media.istockphoto.com/id/1406303920/photo/womens-sweatpants-sport.webp?b=1&s=170667a&w=0&k=20&c=JB_HX_wqLisj4uWTmVl-pgmxzyV-jmHWcDh7G3y98Cs=",
      description: "Women's Sport Sweatpants",
      price: "$39.99"
    },
    {
      src: "https://media.istockphoto.com/id/882584764/photo/jogger-drinking-water.webp?b=1&s=170667a&w=0&k=20&c=bDwjiEDRviLDS7FxWGDjWAA44z72G0CGXNav8vA9MIk=",
      description: "Jogger Drinking Water",
      price: "$29.99"
    },
    {
      src: "https://media.istockphoto.com/id/882584764/photo/jogger-drinking-water.jpg?s=612x612&w=0&k=20&c=Mc8YBRgqSD7f5l4jBIWoyr9mST3aLYmAqIPJt3EpWYY=",
      description: "Jogger Drinking Water",
      price: "$29.99"
    },
    {
      src: "https://media.istockphoto.com/id/1152601146/photo/confident-young-macho-man-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=GAin2XVQzvro58BC1WWAZvzVKwfYMe8gLCxYT7BuYZU=",
      description: "Confident Macho Man T-Shirt",
      price: "$19.99"
    },
    {
      src: "https://media.istockphoto.com/id/1469128112/photo/muscular-man-doing-strength-workout-exercise-in-the-gym.jpg?s=612x612&w=0&k=20&c=TBwbIy7oJc_dwL-HDSvRpGEDRWqj43DehPZChSnWt-0=",
      description: "Strength Training Tank Top",
      price: "$24.99"
    },
    {
      src: "https://media.istockphoto.com/id/1671258160/photo/sweatshirt.jpg?s=612x612&w=0&k=20&c=ebGrkd_A6-vmX6jn-eh1qxCtHYYfk0zCX8rD1aMlc_M=",
      description: "Casual Sweatshirt",
      price: "$39.99"
    },
    {
      src: "https://media.istockphoto.com/id/892376062/photo/portrait-of-a-sportsman.jpg?s=612x612&w=0&k=20&c=gddwZQsxXuMntrLYnje2IoEAdqo-Fgnx5r3NSIXn24s=",
      description: "Sportsman T-Shirt",
      price: "$24.99"
    },
    {
      src: "https://media.istockphoto.com/id/466367844/photo/clothes-make-running.jpg?s=612x612&w=0&k=20&c=eGOSP7X2MoXpGKhv8a3UlYHplvKvIIdUPmVKBSd3bMI=",
      description: "Running Shorts and Top",
      price: "$49.99"
    },
    {
      src: "https://media.istockphoto.com/id/1194094647/photo/handsome-young-man-practicing-yoga-at-park.jpg?s=612x612&w=0&k=20&c=pOc8R7KLJiYd8A6LOvOctwStEFvN775spziJqocadlk=",
      description: "Yoga Tank Top",
      price: "$29.99"
    },
    {
      src: "https://media.istockphoto.com/id/882815206/photo/man-running-at-the-gym.jpg?s=612x612&w=0&k=20&c=hYl2UlySVqc6wRDWFEAal4mXEY_5CzQCsiKAGhef4z0=",
      description: "Running Shorts",
      price: "$34.99"
    },
    {
      src: "https://media.istockphoto.com/id/155601795/photo/mannequin-at-fashion-store.jpg?s=612x612&w=0&k=20&c=8Fo1ujKTBMEOgIdfJmkdo-pqtM1U2fP7147fjFylZCg=",
      description: "Casual T-Shirt Display",
      price: "$19.99"
    },
    {
      src: "https://media.istockphoto.com/id/500284633/photo/portrait-of-male-athlete-in-gym-gym.jpg?s=612x612&w=0&k=20&c=txQfKbDL3CIV8WhrO11Ag7540e-lNXtBE2aBnnxSFjs=",
      description: "Athlete Tank Top",
      price: "$24.99"
    }
  ];

  const OrginalItems = [
    {
      src: "https://plus.unsplash.com/premium_photo-1676212689512-5b66701912d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Stylish Leather Jacket",
      price: "$129.99"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1671030274122-b6ac34f87b8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Denim Jacket with Fur Collar",
      price: "$89.99"
    },
    {
      src: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Bomber Jacket with Patches",
      price: "$79.99"
    },
    {
      src: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Vintage Leather Jacket",
      price: "$149.99"
    },
    {
      src: "https://images.unsplash.com/photo-1532704102644-883111bdf82d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGphY2tldHN8ZW58MHx8MHx8fDA%3D",
      description: "Classic Denim Jacket",
      price: "$59.99"
    },
    {
      src: "https://images.unsplash.com/photo-1519758340474-40fa8cba6584?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGphY2tldHN8ZW58MHx8MHx8fDA%3D",
      description: "Hooded Parka Jacket",
      price: "$99.99"
    },
    {
      src: "https://images.unsplash.com/photo-1509539662397-116cb90542f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGphY2tldHN8ZW58MHx8MHx8fDA%3D",
      description: "Utility Jacket with Pockets",
      price: "$79.99"
    },
    {
      src: "https://images.unsplash.com/photo-1616258734679-57e515f9cdc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGphY2tldHN8ZW58MHx8MHx8fDA%3D",
      description: "Suede Jacket in Tan",
      price: "$119.99"
    },
    {
      src: "https://images.unsplash.com/photo-1548712370-806c729f72ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGphY2tldHN8ZW58MHx8MHx8fDA%3D",
      description: "Faux Fur Lined Jacket",
      price: "$89.99"
    },
    {
      src: "https://media.istockphoto.com/id/1542662833/photo/stone-colour-rip-stop-shorts-with-white-draw-cord.webp?b=1&s=170667a&w=0&k=20&c=0NkN6yfJTGT2AGegxCaMRlYHquNtueerTiVaVhmSLgo=",
      description: "Stone Color Ripstop Shorts",
      price: "$39.99"
    },
    {
      src: "https://media.istockphoto.com/id/1224669613/photo/stylish-man-posing-in-shorts-and-summer-t-shirt-on-beige.webp?b=1&s=170667a&w=0&k=20&c=52CmdiXX7a-cWJzZrqYL9haSg-DloKQtf58yxzHV-pM=",
      description: "Summer Shorts and T-Shirt",
      price: "$49.99"
    },
    {
      src: "https://media.istockphoto.com/id/136795526/photo/rainbow-shorts-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=DwzcsRi4HyHX61J-qoDwF3U9bm5XfqKsjvcKeCkO9l8=",
      description: "Rainbow Shorts",
      price: "$29.99"
    },
    {
      src: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnRzfGVufDB8fDB8fHww",
      description: "Denim Shorts with Frayed Hem",
      price: "$44.99"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1664874602679-84748d471973?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNob3J0c3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Chino Shorts in Khaki",
      price: "$54.99"
    },
  ]

  return (
    <>
    <Header/>
    <SubHeader/>
    <div style={{ backgroundColor: '#385f57', padding: '1rem', height: '25px', width: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px' }}>
    <h2 style={{ margin: 0, fontFamily: 'Georgia pro', fontWeight: '100', fontSize: 14, letterSpacing: '1px', fontStyle: 'normal', color: 'white', }}>{lines[currentIndex]}</h2>
  
    </div>
      <Link to="/Fantailclothing" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative', margin: '20px', padding: '20px' }}>
          <img src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNwb3J0fGVufDB8fDB8fHww" alt="Clothing" style={{ width: '100%', maxHeight: '130vh', margin: 'auto', padding: '20px' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: 20, fontStyle: 'normal', letterSpacing: '6px' }}>SPORTSWEAR</h2>
            <button style={{ fontWeight: '300', color: 'white', border: '2px solid white', padding: '6px 14px', background: 'transparent', fontFamily: 'georgia pro', fontSize: 20, fontStyle: 'normal', letterSpacing: '3px' }}>SHOP</button>
          </div>
        </div>
      </Link>

      <div style={{ fontFamily: 'georgia pro', fontWeight: 'bold', fontSize: 20, fontStyle: 'normal', letterSpacing: '5px', margin: '35px', padding: '20px' }}>
        <h1>SPORTSWEAR</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', margin: '0 20px' }}>
  {clothItems.map((item, index) => (
    <div key={index} style={{ width: '100%', height: '300px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <img src={item.src} alt={`${index + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer' }} />
      <div style={{ padding: '10px' }}>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </div>
  ))}
</div>

      <div style={{ fontFamily: 'georgia pro', fontWeight: 'bold', fontSize: 14, fontStyle: 'normal', textAlign: 'center', padding: '10px', borderRadius: '8px', marginTop: '20px' }}>
  <button style={{ backgroundColor: '#385f57', padding: '8px 20px', border: 'none', cursor: 'pointer', color:'white', letterSpacing:'5px'}}>VIEW ALL</button>
</div>

<Link to="/ClothOrg" style={{ textDecoration: 'none', color: 'inherit' }}>
<div style={{ position: 'relative', margin: '20px', padding: '20px' }}>
  <img src="https://plus.unsplash.com/premium_photo-1663040033987-acaa03699545?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D" alt="Clothing" style={{ width: '100%', maxHeight: '130vh', margin: 'auto', padding: '20px' }} />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
    <h2 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: 20, fontStyle: 'normal', letterSpacing: '6px' }}>SPORTSWEAR</h2>
    <button style={{ fontWeight: '300', color: 'white', border: '2px solid white', padding: '6px 14px', background: 'transparent', fontFamily: 'georgia pro', fontSize: 20, fontStyle: 'normal', letterSpacing: '3px' }}>SHOP</button>
  </div>
</div>
</Link>


<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px', margin: '0 20px' }}>
  {OrginalItems.map((item, index) => (
    <div key={index} style={{ width: '100%', height: '300px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <img src={item.src} alt={`${index + 1}`} style={{ width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer' }} />
      <div style={{ padding: '10px' }}>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </div>
  ))}
</div>

<div style={{ fontFamily: 'georgia pro', fontWeight: 'bold', fontSize: 14, fontStyle: 'normal', textAlign: 'center', padding: '10px', borderRadius: '8px', marginTop: '20px' }}>
<button style={{ backgroundColor: '#385f57', padding: '8px 20px', border: 'none', cursor: 'pointer', color:'white', letterSpacing:'5px'}}>VIEW ALL</button>
</div>
      
<div style={{ borderBottom: '1px solid #d1d5db', width: '100%', marginTop: '1rem', padding: '1rem 0' }}></div>


<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop:'50px', paddingRight:'20px' }}>
<div style={{ maxWidth: '50%', paddingRight: '20px' }}>
  <p style={{ fontFamily: 'georgia pro', fontSize: '16px', marginBottom: '10px', marginLeft:'80px', letterSpacing:'5px' }}>YOUR ORDER MAKES A DIFFERENCE
  <b>  5%</b></p>

  <p style={{ fontFamily: 'georgia pro', fontSize: '16px', marginBottom: '10px', marginLeft:'80px' }}>In April 2021, Blake made the pledge to donate 5% of profits to causes we believe in on land and at sea.</p>
  

  <p style={{ fontFamily: 'georgia pro', fontSize: '16px', marginBottom: '10px', marginLeft:'80px' }}>Our mission is to not only move to zero carbon but to go beyond and make a positive impact on our environment.</p>

  <button style={{ padding: '8px 20px', border: 'none', fontFamily: 'Georgia pro', fontWeight: 'bold', fontSize:14, fontStyle: 'normal', paddingLeft: '80px', letterSpacing: '3px', backgroundColor: '#385f57', marginLeft:'80px', color:'white' }}>LEARN MORE</button>

  </div>
  
<div style={{ flex: '0 0 auto', maxWidth: '50%' }}>
  <img src='https://fantailcricket.com/cdn/shop/files/mykyta-martynenko-_1UF_3TlKcQ-unsplash.jpg?v=1655025741&amp;width=1080' alt='' style={{height: 'auto', marginRight:'30px', paddingRight:'120px', cursor:'pointer' }} />
  </div>
  

 </div>

  <Footer/>
    </>
  );
}

export default Clothing;
