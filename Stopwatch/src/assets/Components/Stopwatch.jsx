import React from 'react'

export default function Stopwatch() {
  return (
  <div>
        <div className='Container'>
            <div>
                <span>00</span><br />
                <span>minutes</span>
            </div>     
            <div>  
                <span>00</span><br /> 
                <span>seconds</span>
            </div>
        </div>
        <div className='Buttons'>
                <button>Start</button>
                <button>Pause</button>
                <button>Stop</button>
        </div>
    </div>  
  )
}
