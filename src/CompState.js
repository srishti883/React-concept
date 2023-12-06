import React, { useState } from 'react';

function CompState() {
    
    const[name,setName]=useState('srishty')
    console.log(name);
    
    const updateData=()=>{
        setName('shyam')
    }
  return (
    <div>
      <h1>Learing usestate</h1>
   
    <h1>{name}</h1>
    <button onClick={updateData}>Updtate the data</button>
    </div>
  );
}

export default CompState;
