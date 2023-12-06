import React ,{useState} from 'react';

function UseCustom() {
    const[count,setCount]=useState(0)
    function handleIncrement(){
       setCount (count+1)
    }
    function handleDecrement(){
        setCount(count-1) 
    }
  return [count,handleIncrement,handleDecrement]
   
  
}

export default UseCustom;
