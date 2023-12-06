import React, { useState } from 'react';

function CompState1() {
  const[random,setRandom]=useState(3)
  const[name,setName]=useState('')
  const[data,setData]=useState([
    {
      id:1,
      name:'sri'
    },
    {
      id:2,
      name:'sree'
    }
  ])

  const handleInputChange=(e)=>{
    setRandom(random+1)
    e.preventDefault()
    setName(e.target.value)

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setData([...data,{
      id:random,
      name:name
    }])
    setName('')
  }
  return (
    <div>
      <h1>Learning variation of states</h1>
      <ul>
        {data.map((ele)=>(
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type='text'
        placeholder='type here'
        value={name}
        onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default CompState1;
