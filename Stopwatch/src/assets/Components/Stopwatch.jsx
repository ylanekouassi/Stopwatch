import React, {useRef} from 'react'
import { useState, useEffect } from 'react'

export default function Stopwatch() {
  return (






  <div>
        <div className='Container'>
            <div>
                <span></span><br />
                <span>minutes</span>
            </div>     
            <div>  
                <span></span><br /> 
                <span>seconds</span>
            </div>
        </div>
        <div className='Buttons'>
                <button className='Start'>Start</button>
                <button className='Pause'>Pause</button>
                <button className='Stop'>Stop</button>
        </div>
    </div>  
  )
}
