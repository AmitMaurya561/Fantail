import React from 'react';

const Location = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontFamily:'georgia pro', fontWeight:200, fontSize:14, fontStyle:'normal',  marginTop: '60px' }}>
      <div style={{ position: 'relative', marginRight: '20px', width: '100%' }}>
        <img
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29vZ2xlJTIwbWFwfGVufDB8fDB8fHww"
          alt="Location"
          style={{ width: '100%', height: '500px' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '10px',
            height: '400px',
            width: '400px',
            marginTop: '20px', 
          }}
        >
          <h2>Visit Our Store</h2>
          <p>84C Elizabeth Knox Place St Johns, Auckland 1072 New Zealand</p>
          <p>
            <b>Special Hours: </b>
            03/05/24: Closed
          </p>
          <p>
            <b>Regular Hours: </b>
            <br />
            Monday: 12:00pm - 6:30pm<br />
            Tuesday: 12:00pm - 5:00pm<br />
            Wednesday: 12:00pm - 5:00pm<br />
            Thursday: 12:00pm - 6:30pm<br />
            Friday: 12:00pm - 5:00pm<br />
            Saturday: Closed<br />
            Sunday: Closed
          </p>

          <button
          style={{
            backgroundColor: '#385f57',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '16px',
            margin: '20px 0', 
            cursor: 'pointer',
            width: '200px',
            height: '40px',
          }}
        >
          GET DIRECTION
        </button>
        
        </div>
      </div>
    </div>
  );
};

export default Location;
