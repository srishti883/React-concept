import React, { useEffect } from 'react';
import { useState } from 'react';

function CompUseEffect() {
  const[count,setCount]=useState(0)
  const[count1,setCount1]=useState(2)
  const handleClick=()=>{
    setCount(count+1)
    
  }

  const handleUpdate=()=>{
    setCount1(count1+3)
  }

  function getData(){
    console.log('coders');
  }
 
  

  useEffect(()=>{
    console.log('hello');
    getData()

  },[count])
  return (
    <div>
      <h1>Learning useeffects</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>click Me</button>
      <h1>{count1}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default CompUseEffect;
