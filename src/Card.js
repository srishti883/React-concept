import React from 'react';
import './Card.css';


function demo(props) {
  return (
    <div className='container'>
      <div className='card'>
      <img  className='card-img' src='logo192.png'/>
      <h1>This is card component</h1>
      <h1>{props.title}</h1>
    </div>

    </div>
    
  );
}

export default demo;
