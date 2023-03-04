import React, { useEffect, useState } from 'react';
import './index.scss';

export default function Words() {

    const [letterClass, setLetterClass] = useState('text-animate');
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
  
    const arr = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
    
  
    const data = arr.map((char, index)=>{
      return <span key={index} className={`${letterClass} _${index}`}>{char}</span>
    });
  
    return (
      <>
        <h1>{letterClass}</h1>
        <h1>
          {data}
        </h1>
      </>
    )
  }
  
