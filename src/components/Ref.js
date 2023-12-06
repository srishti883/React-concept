import React, { useRef, useState } from 'react';

function Ref() {
    const[count,setCount]=useState(4)
    const handleClick=()=>{
        setCount(count+1)
    }
    console.log(count);

    const inputRef=useRef(2)
    console.log(inputRef.current);
    const handleRef=()=>{
        inputRef.current=inputRef.current+1;
        console.log(inputRef.current);
    }
  return (
    <div>
      <h1>Learning useref hook</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Update data</button>
      <h1>{inputRef.current}</h1>
      <button onClick={handleRef}>Update ref value</button>
    </div>
  );
}

export default Ref;
