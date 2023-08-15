import { useState, useEffect } from "react";

const RunningNumber = ({ number, isStarting, duration = 2000, frequency = 45 }) => {
    
    const numInString = typeof number === 'number' ? number.toString() : '0'
    const components = numInString.split('.')
    
    let initialValue = '0'.repeat(components[0].length)
    
    if (components.length == 2) {
      initialValue += '.' + '0'.repeat(components[1].length)
    }
    
    
    const [runner, setRunner] = useState(initialValue);
    
    useEffect(() => {
      if (isStarting) {
        let divisor = duration / frequency;
        let delta = (number / divisor).toString().slice(0, initialValue.length);
        
        const callRunner = setInterval(() => {
          
          setRunner(prev => {
            if (Number(prev) + Number(delta) >= number) {
              clearInterval(callRunner)
              return number
            } else
              return components.length == 2 ? (Number(prev) + Number(delta)).toFixed(components[1].length) : (Number(prev) + Number(delta)); 
          })
        }, frequency)
        
        return () => {
          clearInterval(callRunner)
        }
      }
    }, [isStarting])
    
    
    return <>{ runner }</>
}

export default RunningNumber