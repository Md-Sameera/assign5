import React, { Component } from 'react';
import "./Sty.css";

export default class Rcc extends Component {
  render() {
      const {name}=this.props;
    return (
        <div className='cc'>
        <h1>React Pure Class Components</h1>  
        <h3>{name}</h3>
        </div>
    )
  }
}
