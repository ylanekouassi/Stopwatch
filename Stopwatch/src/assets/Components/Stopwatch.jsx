import React, {useRef} from 'react'
import { useState, useEffect } from 'react'

export default function Stopwatch() {

    const [time, setTime] = useState({seconds: 0, minutes: 0});

    useEffect(()=>{    
        handleTime();
        return ()=> clearInterval(id.current);
    }, [ ])
    
    let id = useRef();

    function handleTime(){
        id.current = setInterval(() => {
    
            setTime((previous)=>{
    
                if (previous.seconds === 60){
                    return {...previous, minutes: previous.minutes+1, seconds: 0}
                }
    
                return {...previous, seconds: previous.seconds + 1};
            });
            console.log(time);         
        }, 1000);    
    }

  return (

  <div>
        <div className='Container'>
            <div>
                <span>{time.minutes}</span><br />
                <span>minutes</span>
            </div>     
            <div>  
                <span>{time.seconds}</span><br /> 
                <span>seconds</span>
            </div>
        </div>
        <div className='Buttons'>
                <button className='Start' onClick={()=>handleTime(id.current)}>Start</button>
                <button className='Pause' onClick={()=>clearInterval(id.current)}>Pause</button>
                <button className='Stop'>Stop</button>
        </div>
    </div>  
  )
}
