import React from 'react';
import UseCustom from './UseCustom';

function Counter1() {
    const[count,handleIncrement,handleDecrement]=UseCustom()
  return (
    <div>
      <h1>Learning counter</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter1;
