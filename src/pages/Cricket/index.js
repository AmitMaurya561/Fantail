import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

const Cricket = () => {

  const lines = ['5% of profits are donated to land and sea environmental causes we believe in.', 'Store closed on the 17/05/24'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [lines.length]);

  const sportsItems = [
    { 
      image: "https://media.istockphoto.com/id/1265144974/photo/cricket-bat-isolated-on-white-background-wooden-cricket-bat-all-angles-studio-shot-cutout.webp?b=1&s=170667a&w=0&k=20&c=DIS-9bMwfcsVH3rkEHCY42I2vF272dVDdKKzcSlgvjk=",
      price: "$50",
      description: "Wooden cricket bat isolated on white background."
    },
    {
      image: "https://media.istockphoto.com/id/505125296/photo/wooden-cricket-bat-and-ball-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=r--zmQrhx0SCKzu7e3OB0DPppaIy2UpqMNe20omZiOQ=",
      price: "$40",
      description: "Wooden cricket bat and ball on a white background."
    },
    {
      image: "https://media.istockphoto.com/id/1306078671/photo/cricket-bat-and-ball-place-on-cricket-ground-green-grass.webp?b=1&s=170667a&w=0&k=20&c=Ws991FsQ26fH3ChvjF0Dbg3agALqFIkfDiWv6JlngxA=",
      price: "$60",
      description: "Cricket bat and ball placed on cricket ground with green grass."
    },
    {
      image: "https://media.istockphoto.com/id/1409301168/photo/cricket-ball-and-bat-against-wall.webp?b=1&s=170667a&w=0&k=20&c=IfZauUuJfD1ipjkINf6oVSUwC-vD0HYDDY2_D_kOxYc=",
      price: "$45",
      description: "Cricket ball and bat leaning against the wall."
    },
    {
      image: "https://media.istockphoto.com/id/1488554718/photo/cricket-bat-and-ball-on-white-background-with-west-indies-flag.jpg?s=612x612&w=0&k=20&c=_uWuORvtynBlifNmSz_Q49hD9HZM-rHonu9wm9wg9xo=",
      price: "$55",
      description: "Cricket bat and ball on white background with West Indies flag."
    },
    {
      image: "https://media.istockphoto.com/id/1152205269/photo/batsman-scoring-runs.jpg?s=612x612&w=0&k=20&c=GCH8W-MtHbmgaJz7Hw7f_4L6fMdQbU0b3CFE_tP7RXQ=",
      price: "$70",
      description: "Batsman scoring runs on the cricket field."
    },
    {
      image: "https://media.istockphoto.com/id/1675983796/photo/cricket-ball-bat-and-india-flag.jpg?s=612x612&w=0&k=20&c=OCzmUoKQV3X5TvtdxNgAigBjxXvEMjT5lVVOYnF43rc=",
      price: "$65",
      description: "Cricket ball, bat, and India flag."
    },
    {
      image: "https://media.istockphoto.com/id/177491473/photo/cricket-bat-and-ball.jpg?s=612x612&w=0&k=20&c=QqX5lbsHBUi7VZc4yLyeW52LVttKtZQ5e-LXEG-uKMI=",
      price: "$80",
      description: "Cricket bat and ball against white background."
    }
  ];

  const itemGloves = [
  {  image: "https://media.istockphoto.com/id/1494128291/photo/black-pen-for-writer-isolated-on-grey-background.jpg?s=612x612&w=0&k=20&c=P7s2JsYnbQwnsAaNBtZmI6RVAsB_kXIg2JPzPzng8p8=",
    price: "$20",
    description: "MATRIX GRIP"
  },
  {  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHPrnEGi5kTauyKG2UGGF5EKxDxo1jP_BnQ&s",
    price: "$50",
    description: "CHEVRON GRIP"
  },
  {  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAwhMYycC_duXYc2kMEOw0GJ6w1OlPZPRyQ&s",
    price: "$40",
    description: "WAVE GRIP"
  },
  {  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIsLfz3y3-7ub0opUBVm1JHZtUbb7V6Xvkw&s",
    price: "$30",
    description: "COIL GRIP"
  },
  {  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNdbeeH9aB4kU5qFVz3cOLmcp8FoVSgHBag&s",
    price: "$60",
    description: "JUNIOR DIAMOND GRIP"
  },

  ]
   
  

  return (
    <>
    <Header/>
    <SubHeader/>
   <div style={{ backgroundColor: '#385f57', padding: '1rem', height: '25px', width: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px' }}>
      <h2 style={{ margin: 0, fontFamily: 'Georgia pro', fontWeight: '100', fontSize: 14, letterSpacing: '1px', fontStyle: 'normal', color: 'white', }}>{lines[currentIndex]}</h2>
    
      </div>

  <Link to="/ClearanceSale" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div style={{ position: 'relative',  }}>
  <img src="https://fantailcricket.com/cdn/shop/files/AfterlightImage_39_copy.jpg?v=1700704955&width=352" alt="" style={{ width: '100%', maxHeight: '100vh',  }} />
  <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
    <h2 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: '40px', fontStyle: 'normal', letterSpacing: '5px', marginBottom: '15px' }}>CLEARANCE SALE ON NOW !!</h2>
    <button style={{ fontWeight: '300', color: 'white', border: '2px solid white', padding: '6px 14px', background: 'transparent', fontFamily: 'georgia pro', fontSize: '14px', fontStyle: 'normal', letterSpacing: '3px' }}>SHOP</button>
  </div>
</div>
</Link>

  <div style={{textAlign:'center', flex:'center', fontFamily:'georgia pro', fontSize:'1.3em', fontStyle:'normal', marginTop:'5rem'}}>
   <h2>Bespoke bats & equipment for the purists of the game.</h2>
  </div>

  <div style={{ position: 'relative', marginTop:'5rem'  }}>
  <img src="https://images.unsplash.com/photo-1508801935195-1fec42cd1d6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNyaWNrZXQlMjBiYXR8ZW58MHx8MHx8fDA%3D" alt="" style={{ width: '100%', maxHeight: '100vh',  }} />
  <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
    <h2 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: '40px', fontStyle: 'normal', letterSpacing: '5px', marginBottom: '20px' }}>CLEARANCE SALE ON NOW !!</h2>
 
    <button style={{ fontWeight: '300', color: 'white', border: '2px solid white', padding: '6px 14px', background: 'transparent', fontFamily: 'georgia pro', fontSize: '14px', fontStyle: 'normal', letterSpacing: '3px', marginRight:'10px'}}>MADE TO ORDER RANGE</button> 
 
    <button style={{ fontWeight: '300', color: 'white', border: '2px solid white', padding: '6px 14px', background: 'transparent', fontFamily: 'georgia pro', fontSize: '14px', fontStyle: 'normal', letterSpacing: '3px' }}>PRE-MADE RANGE</button>
 
    </div>
</div>

    <div style={{margin:'30px', fontFamily:'georgia pro', fontWeight:'bold', fontStyle:'normal', letterSpacing:'5px',fontSize:'20px', padding:'20px'}}>
      <h1>NEW PRE-MADE BATS</h1>
    </div>


    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px', margin: '10px 0' }}>
    {sportsItems.map((item, index) => (
      <div key={index} style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', background: 'white' }}>
        <div style={{ height: '70%', padding: '10px' }}>
          <img
            src={item.image}
            alt={`Item ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'gray', cursor: 'pointer' }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '30%',
            padding: '10px',
            color: 'black',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            backgroundColor: 'white'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'lightgray';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
          }}
        >
          <p style={{ fontSize: '16px', fontWeight: 'bold', margin: '0' }}>{item.price}</p>
          <p style={{ fontSize: '14px', margin: '5px 0' }}>{item.description}</p>
        </div>
      </div>
    ))}
  </div>


<div style={{ fontFamily: 'georgia pro', fontWeight: 'bold', fontSize: 16, fontStyle: 'normal', textAlign: 'center', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
<button style={{ backgroundColor: '#385f57', padding: '13px 25px', border: 'none', cursor: 'pointer', color:'white', letterSpacing:'5px'}}>VIEW ALL</button>
</div>
  

<div style={{ display: 'flex', alignItems: 'center', paddingTop:'50px' }}>
<div>
  <img
    src='https://images.unsplash.com/photo-1593766730583-db5945f17581?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNyaWNrZXQlMjBiYXR8ZW58MHx8MHx8fDA%3D'
    alt=''
    style={{ marginLeft: '70px', height: '450px', width: '500px' }}
  />
</div>
<div style={{ marginLeft: '60px',  }}>
  <h2 style={{ fontFamily: 'Georgia pro', fontWeight: 'bold', letterSpacing: '5px', fontSize: 25, padding: '20px', }}>JUNIOR KASHMIR WILLOW BATS</h2>
  <p style={{ fontFamily: 'Georgia pro', padding: '20px', marginBottom: '20px' }}>The perfect entry level bat for cricket.</p>
  <button style={{padding: '5px 25px', alignItems:'center', border: 'none', fontFamily: 'Georgia pro', fontWeight: 'bold', fontSize:14, fontStyle: 'normal', paddingLeft: '30px',marginLeft:'20px', letterSpacing: '3px', backgroundColor: '#385f57', color:'white' }}>SHOP</button>
</div>

</div>

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', margin: '10px 20px', marginTop:'150px'}}>
 <Link to='/BattingLegguard'>
 <div style={{ position: 'relative' }}>
 <img src='https://media.istockphoto.com/id/118321521/photo/cricket-batsman-returning-from-the-field.jpg?s=612x612&w=0&k=20&c=Q3kolUG7b6z_GQtMYgGmUBSnGr3XcY8XMnnSLYK4zno=' alt='' style={{ width: '100%', height: '500px', objectFit: 'cover', cursor:'pointer' }} />
 <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', fontFamily: 'typebasefallback', letterSpacing: '4px',  fontSize: 'calc(var(--typeBaseSize) * 0.92)', fontWeight:'bold', fontStyle: 'normal' }}>
   <p>BATTING PADS</p>
   <button style={{ padding: '8px 15px', background: 'transparent', border: '2px solid white', borderRadius: '2px', color: 'white', cursor: 'pointer',  lineHeight:'var(--typeBaseLineHeight)', fontWeight:14 }}>SHOP</button>
 </div>
</div>
 </Link>
   
 <Link to='/BattingGloves'>
 <div style={{ position: 'relative' }}>
 <img src='https://media.istockphoto.com/id/172209037/photo/we-are-the-champions.jpg?s=612x612&w=0&k=20&c=TfOGwpym1_iUdenNCzdea7IzShK3g0RXgRmdpcoH3M4=' alt='' style={{ width: '100%', height: '500px', objectFit: 'cover', cursor:'pointer' }} />
 <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', fontFamily: 'typebasefallback', letterSpacing: '4px',  fontSize: 'calc(var(--typeBaseSize) * 0.92)', fontWeight:'bold', fontStyle: 'normal' }}>
   <p>BATTING GLOVES</p>
   <button style={{ padding: '8px 15px', background: 'transparent', border: '2px solid white', borderRadius: '2px', color: 'white', cursor: 'pointer',  lineHeight:'var(--typeBaseLineHeight)', fontWeight:14 }}>SHOP</button>
 </div>
</div>
 </Link>

 <Link to='/WicketKeeping'>
 <div style={{ position: 'relative' }}>
 <img src='https://media.istockphoto.com/id/79338141/photo/cricket-helmet-pads-and-gloves.jpg?s=612x612&w=0&k=20&c=PI441xr_OKRgs-SJK6o5OmOfnC9uZLaRubY018OCbEA=' alt='' style={{ width: '100%', height: '500px', objectFit: 'cover', cursor:'pointer', filter: 'brightness(70%)' }} />
 <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', fontFamily: 'typebasefallback', letterSpacing: '4px',  fontSize: 'calc(var(--typeBaseSize) * 0.92)', fontWeight:'bold', fontStyle: 'normal' }}>
   <p>WICKET KEEPING</p>
   <button style={{ padding: '8px 15px', background: 'transparent', border: '2px solid white', borderRadius: '2px', color: 'white', cursor: 'pointer', lineHeight:'var(--typeBaseLineHeight)', fontWeight:14 }}>SHOP</button>
 </div>
</div>

 </Link>
</div>


<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'50px'}}>
  <h1 style={{margin:'20px', fontFamily:'georgia pro', fontWeight:'bold',fontSize:20, letterSpacing:'4px'}}>PREMIUM GRIPS</h1>
  <button style={{fontFamily:'georgia pro',letterSpacing:'2px' ,margin:'20px', background:'white', border:'1px solid',borderColor:'#e8e8e1', padding:'8px 14px', fontWeight:'400', backgroundColor:'transparent', color:'#000000'  }}>VIEW ALL</button>
</div>


<div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '3px', margin: '10px 0',  }}>
{itemGloves.map((item, index) => (
    <div key={index} style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', background: 'white' }}>
        <div style={{ height: '70%', padding: '10px' }}>
            <img src={item.image} alt={`Item ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'gray', cursor: 'pointer' }} />
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

<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop:'50px', paddingRight:'20px' }}>
<div style={{ maxWidth: '50%', paddingRight: '20px' }}>
  <p style={{ fontFamily: 'georgia pro',fontWeight:'bold', fontSize:20, marginBottom: '10px', marginLeft:'80px', letterSpacing:'5px' }}>CRICKET PANTS
  </p>

  <p style={{ fontFamily: 'georgia pro', fontSize: '16px', marginBottom: '10px', marginLeft:'80px' }}> Your cricket pants are a key component to a comfortable and extended stay at the crease or day in the field.</p>
  

  <p style={{ fontFamily: 'georgia pro', fontSize: '16px', marginBottom: '10px', marginLeft:'80px' }}>The Core cricket pant is crafted from soft, breathable nylon-spandex blend fabric that wicks moisture keeping you cool and dry. The stitched pleat retains the traditional lines while introducing a contemporary fabric, split hem and a tapered fit.</p>

  <button style={{ padding: '8px 14px', border: '1px solind transparent', fontFamily: 'Georgia pro', fontWeight: 'bold', fontSize:14, fontStyle: 'normal', paddingLeft: '80px', letterSpacing: '3px', backgroundColor: '#385f57', marginLeft:'80px', color:'white' }}>SHOP</button>

  </div>
  
  <div style={{ display: 'flex' }}>
  <img src='https://fantailcricket.com/cdn/shop/files/Focal_Half_Front.jpg?v=1643761698&amp;width=180%20180w' alt='' style={{ height: '250px', marginRight: '0', paddingRight: '0', cursor: 'pointer', marginTop: '90px' }} />
  <img src='https://fantailcricket.com/cdn/shop/files/Focal_Half_Back.jpg?v=1643761726&amp;width=1080' alt='' style={{ height: '300px', paddingRight: '0', cursor: 'pointer' }} />
</div>
  </div>       
     
  <Link to='/Services'>
  <div style={{ position: 'relative', marginTop:'5rem', textAlign: 'left' }}>
  <img src="https://media.istockphoto.com/id/1500884570/photo/measuring-tape-material-ready-for-cut-copy-space-backgrounds.jpg?s=612x612&w=0&k=20&c=qt9bTjuQJkQj-66hr5yjhdGtPv50dyftKTTscsLo0S8=" alt="" style={{ width: '100%', maxHeight: '100vh' }} />
  <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', width: '50%' }}>
    <h2 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: '20px', fontStyle: 'normal', letterSpacing: '4px' }}>FAINTAIL IS YOUR ONE-STOP FOR</h2>
    <h2 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: '40px', fontStyle: 'normal', letterSpacing: '2px' }}>SERVICES AND REPAIRS</h2>
    <h2 style={{ fontWeight: 'bold', fontFamily: 'georgia pro', fontSize: '20px', fontStyle: 'normal' }}>From knocking in to handle replacements</h2>
 
    <button style={{ fontWeight: 'bold', color: 'white', border: '2px solid white', padding: '6px 14px', background: 'transparent', fontFamily: 'georgia pro', fontSize: '14px', fontStyle: 'normal', letterSpacing: '3px', marginTop:'20px' }}>SHOP</button> 
  </div>
</div>
</Link>


<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop:'50px', paddingRight:'20px', marginTop:'50px' }}>
<div style={{ maxWidth: '50%', paddingRight: '20px' }}>
  <p style={{ fontFamily: 'georgia pro', fontSize: '16px', marginBottom: '10px', marginLeft:'80px', letterSpacing:'5px' }}>YOUR ORDER MAKES A DIFFERENCE
  <b>  5%</b></p>

  <p style={{ fontFamily: 'georgia pro', fontSize: '16px', marginBottom: '10px', marginLeft:'80px' }}>In April 2021, Blake made the pledge to donate 5% of profits to causes we believe in on land and at sea.</p>
  
  <br/>
  <p style={{ fontFamily: 'georgia pro', fontSize: '16px', marginBottom: '10px', marginLeft:'80px' }}>Our mission is to not only move to zero carbon but to go beyond and make a positive impact on our environment.</p>

  <button style={{ padding: '8px 15px', border: 'none', fontFamily: 'Georgia pro', fontSize:14, fontStyle: 'normal', paddingLeft: '80px', letterSpacing: '2px', backgroundColor: '#385f57', marginLeft:'80px', color:'white' }}>LEARN MORE</button>

  </div>
  
<div style={{ flex: '0 0 auto', maxWidth: '50%' }}>
  <img src='https://fantailcricket.com/cdn/shop/files/5_cricket.jpg?v=1655509869&amp;width=1080' alt='' style={{height: 'auto', marginRight:'30px', paddingRight:'120px', cursor:'pointer' }} />
  </div>
  

 </div>
   
 <div className="border-b border-gray-300 w-full mt-12"></div>


    <div style={{fontFamily:'georgia pro', fontSize:18, letterSpacing:'3px', fontWeight:'bold', justifyItems:'center', textAlign:'center', marginTop:'50px'}}>
       <h1>FIND FANTAIL CRICKET ON</h1>
    </div>

    <div style={{ fontFamily:'georgia pro', fontSize:10, letterSpacing:'3px', textAlign:'center', marginTop:'50px', display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
       
        <button style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.1)', color: 'black', padding: '5px 18px', textAlign: 'center', textDecoration: 'none', display: 'block', fontSize: '12px', margin: '4px 2px', cursor: 'pointer', marginRight: '10px' }}>INSTAGRAM</button>
        
    </div>
    <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        
        <button style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.1)', color: 'black', padding: '5px 20px', textAlign: 'center', textDecoration: 'none', display: 'block', fontSize: '12px', margin: '4px 2px', cursor: 'pointer', }}>FACEBOOK</button>
       
    </div>
    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        
        <button style={{ backgroundColor: 'white', border: '1px solid rgba(0, 0, 0, 0.1)', color: 'black', padding: '5px 20px', textAlign: 'center', textDecoration: 'none', display: 'block', fontSize: '12px', margin: '4px 2px', cursor: 'pointer', marginLeft: '10px' }}>TIK TOK</button>

    </div>
</div>

<div style={{ fontFamily: 'georgia pro', fontSize: 10, letterSpacing: '3px', textAlign: 'center', marginTop: '14px', display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{ 
            backgroundColor: 'white', 
            border: '1px solid rgba(0, 0, 0, 0.1)', 
            color: 'black', 
            padding: '5px 18px', 
            textAlign: 'center', 
            textDecoration: 'none', 
            display: 'block', 
            fontSize: '12px', 
            margin: '4px 2px', 
            cursor: 'pointer', 
            marginLeft: '20px' 
        }}>YOUTUBE - CRICKET</button>
    </div>
    <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <button style={{ 
            backgroundColor: 'white', 
            border: '1px solid rgba(0, 0, 0, 0.1)', 
            color: 'black', 
            padding: '5px 20px', 
            textAlign: 'center', 
            textDecoration: 'none', 
            display: 'block', 
            fontSize: '12px', 
            margin: '4px 2px', 
            cursor: 'pointer' 
        }}>SPOTIFY</button>
    </div>
    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <button style={{ 
            backgroundColor: 'white', 
            border: '1px solid rgba(0, 0, 0, 0.1)', 
            color: 'black', 
            padding: '5px 20px', 
            textAlign: 'center', 
            textDecoration: 'none', 
            display: 'block', 
            fontSize: '12px', 
            margin: '4px 2px', 
            cursor: 'pointer', 
            marginRight: '20px' 
        }}>YOUTUBE - PARLOUR</button>
    </div>
</div>


<div className="border-b border-gray-300 w-full mt-12 "></div>

   <Footer/>
  </>
  )
}

export default Cricket

