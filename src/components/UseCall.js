import React,{memo} from 'react';

function UseCall(props) {
    const {callback}=props
    console.log('child component');
  return (
    <div>
      <h1>Learning about usecallabck</h1>
    </div>
  );
}

export default memo( UseCall);
