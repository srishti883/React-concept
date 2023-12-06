import React, { useRef } from 'react';

function Ref1() {
    const inputRef=useRef()
   
 
    const handleClick=()=>{
        console.log(inputRef.current.className);
        inputRef.current.style.backgroundColor='red'
        
    }
  return (
    <div>
      <h1 >Allows to get access of dom</h1>
      <input type='text' 
      ref={inputRef}
      placeholder='type here'
      className='abc'
      />
      <button onClick={handleClick}>click Me</button>
    </div>
  );
}

export default Ref1;
