import React, { useEffect, useMemo, useState } from 'react';

function UseMemo() {
    const[male,setMale]=useState(0)
    const[female,setFemale]=useState(0)

    const memoMale=useMemo( function(){
        console.log('updated the data');
        return male*5
    },[male])

    // const NoRender=useMemo((
    //     return <div>
    //         <h1>Learning useMemo</h1>
    // <h1>Learning useMemo</h1>
    // <h1>Learning useMemo</h1>

    //     </div> ))
    const handleMale=()=>{
        setMale(male+1)
    }
    const handleFemale=()=>{
        setFemale(female+1)
    }

    

   
  return (
    <div>
      <h1>hello</h1>
      <h1>update:{memoMale}</h1>
      <h1>Male:{male}</h1>
      <h1>Female:{female}</h1>
      <button onClick={handleMale}>Update the male</button>
      <button onClick={handleFemale}>Update the Female</button>
    </div>
  );
}

export default UseMemo;
