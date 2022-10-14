import './App.css';
import React,{useEffect, useState} from 'react';

function User(props) {
    const [data, setData] = useState('Ahamad');
  useEffect(()=>{
    console.warn("use effect is called")
  },[props.count]);

  return (
    <div className="App">
      <h1>Data : {props.data}</h1>
      <h1>Count : {props.count}</h1>
      <button onClick={() => setState('sam')} >Click</button>
    

    </div>
  );
}

export default User;