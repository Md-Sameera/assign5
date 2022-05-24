import React  from 'react';
import "./Sty.css";

const Pfc=({ name })=> {
  return (
    <div className='fc'>
        <h1>React Pure functional Components</h1>  
        <h3>{name}</h3>
    </div>
  )
} 
export default Pfc;