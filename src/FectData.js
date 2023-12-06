import React, { useEffect, useState } from 'react';

function FectData() {
    const[data,setData]=useState([])


  async  function getData(){
        const data= await fetch('https://jsonplaceholder.typicode.com/posts')
        const response= await data.json()
        console.log(response);
        setData(response)
    }

    useEffect(()=>{
        getData()

    },[])
   
  return (
    <div>
      <h1>Learning about api integration</h1>
      {data.map((ele)=>(
        <div key={ele.id}>
            <li>{ele.title}</li>
            </div>
      ))}
    </div>
  );
}

export default FectData;
