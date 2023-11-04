import React, { useRef } from 'react'
import { useState, useEffect } from 'react'


export default function Stopwatch () {

const [time, setTime] = useState(0);

useEffect(()=>{    
    handleTime();
    return ()=> clearInterval(id.current);
}, [ ])

let id = useRef();

function handleTime(){
    id.current = setInterval(() => {
        setTime((previous)=>previous+1);
        console.log(time);         
    }, 1000);    
}


  return (  
<div>
    <div className='Container'>
        <div>
            <span></span>
            <br />
            <span>minutes</span>
        </div>
        <div>
            <span>{time}</span>
            <br />
            <span>seconds</span>
        </div>
    </div>
    <div className='Button'>
    <button className='Start' onClick={()=>handleTime(id.current)}>Start</button> 
    <button className='Pause' onClick={()=>clearInterval(id.current)}>Pause</button>
    <button className='Stop' onClick={()=>{clearInterval(id.current)
    setTime(0)}}>Stop</button>   
    </div>    
</div>
  )
}
