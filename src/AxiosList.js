import React, { useState } from 'react';
import axios from 'axios'

function AxiosList() {
    const[data,setData]=useState([])

    async function getData(){
        const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data);
        setData(response.data)
    }
    getData()

  return (
    <div>
      <h1>Learning Axios</h1>
      {data.map((ele)=>(
        <div key={ele.id}>
            <li>{ele.title}</li>
            </div>
      ))}
    </div>
  );
}

export default AxiosList;
